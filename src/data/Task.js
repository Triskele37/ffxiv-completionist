export class Task {
    _parent;

    completionFlag = 'N';

    constructor(task, parent) {
        // Map properties of task to this class
        const keys = Object.keys(task);
        keys.forEach((key) => this[key] = task[key]);

        // Attach parent
        this._parent = parent;
    }

    changeCompletionFlag(flag) {
        // Get flag conversions (N changes are implied from Y changes)
        const wasX = this.completionFlag === 'X' && flag !== 'X'; // X to ?
        const wasY = this.completionFlag === 'Y' && flag !== 'Y'; // Y to ?
        const nowX = flag === 'X' && this.completionFlag !== 'X'; // ? to X
        const nowY = flag === 'Y' && this.completionFlag !== 'Y'; // ? to Y

        this.completionFlag = flag;

        if(wasX || nowX) {
            this._parent.updateExcluded(wasX ? -1 : nowX ? 1 : 0);
            this._parent.updateTotal(wasX ? 1 : nowX ? -1 : 0);
        }

        if(wasY || nowY) {
            this._parent.updateCompleted(wasY ? -1 : nowY ? 1 : 0);
        }
    }
}
