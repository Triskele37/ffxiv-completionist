import { eStore } from "../store/electronStore";
import { vStore } from "../store";
import { Chainer } from "./Chainer";

export class Task {
    name;
    id; // Its assumed that an id is passed with every task
    _parent;
    chains; // array of related tasks to chain completion marking

    completionFlag = "N";

    cPrev; // Tasks that must be completed if this one is
    cNext; // Tasks that cannot be completed without this one
    cSiblings; // Tasks that should mirror this one's completion
    cExclude; // Tasks that should be excluded if this is marked Y
    cExclusive; // hack for starting city spaghetti
    // minValue = 0; // Define this for numeric completion tasks
    // maxValue = 42; // Define this for numeric completion tasks

    constructor(task, parent) {
        // Map properties of task to this class
        const keys = Object.keys(task);
        keys.forEach((key) => {
            this[key] = task[key];

            if(parent.isNumericCompletion) this.isNumericCompletion = true;
        });

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
    changeCompletionFlag(flag, firstInChain) {
        // Dodge all of this if chaining is disabled
        if(!eStore.get('chaining-enabled')) {
            this.setCompletionFlag(flag);
            return;
        }

        if(this.completionFlag === flag) return; // MUI IMPORTANTE

        this.setCompletionFlag(flag);

        // Commit this task to the stored chain
        if(firstInChain) vStore.commit('chain/START_CHAIN', this);
        else {
            vStore.commit('chain/PUSH_CHAINED', {
                task: this,
                fromFlag: this.completionFlag
            });
        }

        // Return a list of chained tasks including this one
        const chainer = new Chainer(this, flag);
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
