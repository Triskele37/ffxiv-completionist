export class Task {
    name;
    id; // Its assumed that an id is passed with every task
    ID; // xivapi has ID as the attribute
    _parent;

    completionFlag = 'N';

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

    changeCompletionFlag(flag) {
        // Get flag conversions (N changes are implied from Y changes)
        const wasX = this.completionFlag === 'X' && flag !== 'X'; // X to ?
        const wasY = this.completionFlag === 'Y' && flag !== 'Y'; // Y to ?
        const nowX = flag === 'X' && this.completionFlag !== 'X'; // ? to X
        const nowY = flag === 'Y' && this.completionFlag !== 'Y'; // ? to Y

        this.completionFlag = flag;

        if(wasX || nowX) {
            this._parent.updateExcluded(wasX ? -1 : nowX ? 1 : 0);
        }

        if(wasY || nowY) {
            this._parent.updateCompleted(wasY ? -1 : nowY ? 1 : 0);
        }
    }

    changeCompletionNumber(newValue) {
        let previousValue = this.completionFlag;
        this.completionFlag = newValue.toString();

        // Restrict values to the minimum defined on the task
        if(parseFloat(previousValue) < this.minValue) previousValue = this.minValue.toString();

        // Prevent negative progression
        if(newValue < this.minValue) this._parent.updateCompleted(0);
        else this._parent.updateCompleted(newValue - previousValue);
    }

    get storageKey() {
        const name = (this.Name || this.name || '').trim();

        return name
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '');
        if(this.id !== undefined && this.id !== null) return this.id;
        return this.ID;
    }

    get fullStorageKey() {
        return `${this._parent.fullStorageKey}.${this.storageKey}`;
    }

    get oldStorageKey() {
        const name = (this.Name || this.name || '').trim();

        return name
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '');
    }

    get oldFullStorageKey() {
        return `${this._parent.oldFullStorageKey}.${this.oldStorageKey}`;
    }
}
