import { eStore } from "../store/electronStore";
import { vStore } from "../store";
import { Chainer } from "./Chainer";

export class Task {
    name;
    id; // Its assumed that an id is passed with every task
    _parent;
    chains; // array of related tasks to chain completion marking

    completionFlag = "N";
    // minValue = 0; // Define this for numeric completion tasks
    // maxValue = 42; // Define this for numeric completion tasks

    // Chaining Properties
    cPrev; // Tasks that must be completed if this one is
    cPrevAt; // cPrev for numeric completion tasks
    cPrevAny; // Tasks that, if any are completed, complete this one
    cAll; // Shorthand for cPrev where link is a group
    cNext; // Tasks that cannot be completed without this one
    cSiblings; // Tasks that should mirror this one's completion
    cSiblingsAt; // cSiblings for numeric completion tasks
    cCombo; // Tasks that should be checked when this one is marked
    cComboAt; // cCombo for numeric completion tasks
    cExclude; // Tasks that should be excluded if this is marked Y
    cExclusive; // hack for starting city spaghetti

    constructor(task, parent) {
        // Map properties of task to this class
        const keys = Object.keys(task);
        keys.forEach((key) => {
            this[key] = task[key];
        });

        if(parent.isNumericCompletion) this.isNumericCompletion = true;
        if(parent.cCombo) this.cCombo = parent.cCombo;

        // Attach parent
        this._parent = parent;
    }

    //#region------------------------------------------------------------------ Default Behaviour
    setCompletionFlag(flag) {
        if(this.completionFlag === flag) return; // MUI IMPORTANTE

        // Get flag conversions (N changes are implied from Y changes)
        const wasX = this.completionFlag === "X" && flag !== "X"; // X to ?
        const wasY = this.completionFlag === "Y" && flag !== "Y"; // Y to ?
        const nowX = flag === "X" && this.completionFlag !== "X"; // ? to X
        const nowY = flag === "Y" && this.completionFlag !== "Y"; // ? to Y

        this.completionFlag = flag;

        if(wasX || nowX) {
            this._parent.updateExcluded(wasX ? -1 : nowX ? 1 : 0);
        }

        if(wasY || nowY) {
            this._parent.updateCompleted(wasY ? -1 : nowY ? 1 : 0);
        }
    }

    setCompletionNumber(newValue) {
        let previousValue = this.completionFlag;
        this.completionFlag = newValue.toString();

        // Restrict values to the minimum defined on the task
        if(parseFloat(previousValue) < this.minValue) previousValue = this.minValue.toString();

        // Prevent negative progression
        if(isNaN(previousValue) || newValue < this.minValue) {
            this._parent.updateCompleted(0);
        }
        else {
            this._parent.updateCompleted(newValue - previousValue);
        }
    }
    //#endregion

    //#region------------------------------------------------------------------ Chaining
    changeCompletionFlag(toFlag, firstInChain) {
        if(this.shouldChain(firstInChain, toFlag)) {
            const fromFlag = this.completionFlag;
            this.setCompletionFlag(toFlag);

            this.chain(firstInChain, fromFlag, toFlag);
        }
    }

    changeCompletionNumber(toNum, firstInChain) {
        if(this.shouldChain(firstInChain, toNum)) {
            const fromNum = this.completionFlag;
            this.setCompletionNumber(toNum);

            this.chain(firstInChain, fromNum, toNum);
        }
    }

    // Checks performed before setting the new flag and chaining
    shouldChain(firstInChain, toFlag) {
        // Dodge all of this if chaining is disabled
        if(!eStore.get('chaining-enabled')) {
            this.setCompletionNumber(toFlag);
            return false;
        }

        // Don't continue if the current number is already whats being pushed
        if(this.completionFlag === toFlag) {
            // Clear the chainstore in the event the first chain is blocked
            if(firstInChain) vStore.commit('chain/CLEAR_CHAIN');
            return false;
        }

        // Don't continue if this task has already been chained through
        //TODO: ids are not unique between different groups
        // if(!firstInChain && vStore.getters["chain/idExistsInStore"](this.id, toFlag)) {
        //     return false;
        // }

        return true;
    }

    // Chaining logic that occurs after the flag has been updated
    chain(firstInChain, fromFlag, toFlag) {
        // Commit this task to the stored chain
        if(firstInChain) {
            vStore.commit('chain/START_CHAIN', {
                task: this,
                fromFlag,
                toFlag: this.completionFlag
            });
        }
        else {
            vStore.commit('chain/PUSH_CHAINED', {
                task: this,
                fromFlag
            });
        }

        // Return a list of chained tasks including this one
        const chainer = new Chainer(this, toFlag);
        chainer.triggerChains();
    }
    //#endregion

    //#region------------------------------------------------------------------ Storage Key
    get storageKey() {
        return (this.id !== undefined && this.id !== null) ? this.id : -1;
    }

    get fullStorageKey() {
        return `${this._parent.fullStorageKey}.${this.storageKey}`;
    }
    //#endregion
}
