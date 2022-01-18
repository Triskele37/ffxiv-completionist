import { Completion, CompletionFlag } from '@constant';
import { ChainService } from '@service/chain/chain.service';

import { GroupLinkPipe } from '../core/pipe/group-link.pipe';
import { DataGroup } from './DataGroup';
import { AtLinks, Links } from './Links';
import { Chainer } from './Chainer';

//TODO: raw input json types
// Hack to allow any task property without explicit declaration here
// consider creating classes and extending Task onto them
export interface Task {
    [key: string]: any;
}

export class Task {
    static chainingEnabled: boolean;

    //#region--------------------------------- Standard Props
    id: number;
    name: string;
    _parent: DataGroup;

    // Flag Props
    completionFlag: CompletionFlag = Completion.N;
    defaultCompletion: CompletionFlag;

    // UI Props
    selected: boolean;

    //#endregion

    //#region--------------------------------- Numeric Props
    isNumericCompletion: boolean;
    defaultValue: number;
    minValue: number;
    maxValue: number;

    //#endregion

    //#region--------------------------------- Chain Props
    cPrev?: Links; // Tasks that must be completed if this one is
    cPrevAt?: AtLinks; // cPrev for numeric completion tasks
    cPrevAny?: Links; // Tasks that, if any are completed, complete this one

    cNext?: Links; // Tasks that cannot be completed without this one

    cSiblings?: Links; // Tasks that should mirror this one's completion
    cSiblingsAt?: AtLinks; // cSiblings for numeric completion tasks

    cCombo?: Links; // Tasks that should be checked when this one is marked
    cComboAt?: AtLinks; // cCombo for numeric completion tasks

    cExclude?: Links; // Tasks that should be excluded if this is marked Y
    cExclusive?: Links; // hack for starting city spaghetti

    //#endregion

    constructor(json: any, parent: DataGroup) {
        // Map all properties from json to this class
        const keys = Object.keys(json);
        keys.forEach((key) => this[key] = json[key]);

        // Attach parent
        this._parent = parent;

        // Inherit properties from parent group if not explicitly defined on task json
        this.inheritFromParent('defaultCompletion', parent);
        this.inheritFromParent('isNumericCompletion', parent);

        // Combine properties defined on parent
        this.concatWithParent('cPrev', parent);
        this.concatWithParent('cPrevAny', parent);
        this.concatWithParent('cNext', parent);
        this.concatWithParent('cSiblings', parent);
        this.concatWithParent('cCombo', parent);
        this.concatWithParent('cExclude', parent);
        this.concatWithParent('cExclusive', parent);

        this.deepConcatWithParent('cPrevAt', parent);
        this.deepConcatWithParent('cSiblingsAt', parent);
        this.deepConcatWithParent('cComboAt', parent);
    }

    get groupLink(): string {
        return new GroupLinkPipe().transform(this);
    }

    //#region------------------------------------------------------- Inheritance
    private inheritFromParent(key: keyof Task, parent: DataGroup): void {
        if(parent[key] && this[key] === undefined) this[key] = parent[key];
    }

    private concatWithParent(key: keyof Task, parent: DataGroup): void {
        if(parent[key]) {
            if(!this[key]) this[key] = parent[key]; // Exists only on parent
            else { // Exists on both
                const concated = [];

                if(Array.isArray(parent[key])) concated.push(...parent[key]);
                else concated.push(parent[key]);

                if(Array.isArray(this[key])) concated.push(...this[key]);
                else concated.push(this[key]);

                this[key] = concated;
            }
        }
    }

    private deepConcatWithParent(key: keyof Task, parent: DataGroup): void {
        if(parent[key]) {
            if(!this[key]) this[key] = parent[key]; // Exists only on parent
            else { // Exists on both
                Object.keys(parent[key]).forEach((at) => {
                    if(!this[key][at]) this[key][at] = parent[key][at];
                    else {
                        const concated = [];

                        if(Array.isArray(parent[key][at])) concated.push(...parent[key][at]);
                        else concated.push(parent[key][at]);

                        if(Array.isArray(this[key][at])) concated.push(...this[key][at]);
                        else concated.push(this[key][at]);

                        this[key][at] = concated;
                    }
                });
            }
        }
    }

    //#endregion

    //#region------------------------------------------------------- Storage Key
    get storageKey(): string {
        return `${this.id ?? -1}`;
    }

    get storageGroup(): string { // IS used in task-table
        return this._parent.fullStorageKey;
    }

    get fullStorageKey(): string {
        return `${this._parent.fullStorageKey}.${this.storageKey}`;
    }

    //#endregion

    setCompletion(flag: CompletionFlag): void {
        if((Object.values(Completion) as string[]).includes(flag)) {
            this.setCompletionFlag(flag as Completion);
        }
        else {
            this.setCompletionNumber(flag);
        }
    }

    //#region------------------------------------------------------- Flag Mutation
    setCompletionFlag(flag: Completion): void {
        const fromFlag = this.completionFlag;

        // Do nothing if the flag isn't changing
        if(fromFlag === flag) return; // MUI IMPORTANTE

        // Update the task's flag
        this.completionFlag = flag;

        // Update excluded count if changing to or from X
        if(fromFlag === Completion.X) this._parent.updateExcluded(-1);
        else if(flag === Completion.X) this._parent.updateExcluded(1);

        // Update completed count if changing to or from Y
        if(fromFlag === Completion.Y) this._parent.updateCompleted(-1);
        else if(flag === Completion.Y) this._parent.updateCompleted(1);
    }

    changeCompletionFlag(toFlag: Completion, firstInChain?: boolean): void {
        // Dodge all of this if chaining is disabled
        if(!Task.chainingEnabled || !this.hasChainProps()) {
            this.setCompletionFlag(toFlag);
        }
        else if(this.shouldChain(firstInChain, toFlag)) {
            const fromFlag = this.completionFlag;
            this.setCompletionFlag(toFlag);
            this.chain(firstInChain, fromFlag, toFlag);
        }
    }

    //#endregion

    //#region------------------------------------------------------- Numeric Mutation
    setCompletionNumber(value: string | number) {
        let previousValue: number = parseFloat(this.completionFlag);
        let newValue: number = typeof value === 'string' ? parseFloat(value) : value;

        if(isNaN(newValue)) newValue = isNaN(this.defaultValue) ? 0 : this.defaultValue;
        this.completionFlag = newValue.toString();

        // Restrict values to the minimum defined on the task
        if(previousValue < this.minValue) {
            previousValue = parseFloat(this.minValue.toString());
        }

        // Prevent negative progression
        if(isNaN(previousValue) || isNaN(newValue) || newValue < this.minValue) {
            this._parent.updateCompleted(0);
        }
        else {
            this._parent.updateCompleted(newValue - previousValue);
        }
    }

    changeCompletionNumber(toNum: string, firstInChain?: boolean) {
        // Dodge all of this if chaining is disabled
        if(!Task.chainingEnabled || !this.hasChainProps()) {
            this.setCompletionNumber(toNum);
        }
        else if(this.shouldChain(firstInChain, toNum)) {
            const fromNum = this.completionFlag;
            this.setCompletionNumber(toNum);
            this.chain(firstInChain, fromNum, toNum);
        }
    }

    //#endregion

    //#region------------------------------------------------------- Chaining
    // Checks performed before setting the new flag and chaining
    private shouldChain(firstInChain: boolean, toFlag: CompletionFlag): boolean {
        // Don't continue if the current flag hasn't changed
        if(this.completionFlag === toFlag) {
            // Clear the chainstore in the event the first chain is blocked
            if(firstInChain) ChainService.Instance.undoCurrentChain();
            return false;
        }

        if(firstInChain) return true;

        // Don't continue if this task has already been chained through
        return !ChainService.Instance.taskAlreadyChained(this, toFlag);
    }

    private hasChainProps(): boolean {
        return (
            this.cPrev ?? this.cPrevAt ?? this.cPrevAny ??
            this.cNext ??
            this.cSiblings ?? this.cSiblingsAt ??
            this.cCombo ?? this.cComboAt ??
            this.cExclude ?? this.cExclusive ?? false
        ) !== false;
    }

    // Chaining logic that occurs after the flag has been updated
    private chain(firstInChain: boolean, fromFlag: CompletionFlag, toFlag: CompletionFlag): void {
        // Commit this task to the stored chain
        if(firstInChain) {
            ChainService.Instance.startChain({
                task: this,
                fromFlag,
                toFlag: this.completionFlag
            });
        }
        else {
            ChainService.Instance.pushChained({
                task: this,
                fromFlag
            });
        }

        // Return a list of chained tasks including this one
        const chainer = new Chainer(this, toFlag);
        chainer.triggerChains();
    }

    //#endregion
}
