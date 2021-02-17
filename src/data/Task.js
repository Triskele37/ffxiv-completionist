import { eStore } from "../store/electronStore";

export class Task {
    name;
    _parent;

    language = eStore.get('lang') || 'en';
    completionFlag = 'N';

    // minValue = 0; // Define this for numeric completion tasks
    // maxValue = 42; // Define this for numeric completion tasks

    constructor(task, parent) {
        // Map properties of task to this class
        const keys = Object.keys(task);
        keys.forEach((key) => {
            this[key] = task[key];

            if(parent.isNumericCompletion) this.isNumericCompletion = true;

            // Create a getter for this property to aid in localization
            if(key.includes('_en')) {
                const nonLocalizedKey = key.replace('_en', '');

                Object.defineProperty(this, nonLocalizedKey, {
                    get: () => this[`${nonLocalizedKey}_${this.language}`]
                });
            }
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

        this._parent.updateCompleted(newValue - previousValue);
    }

    get _storageKey() {
        const name = (this.Name || this.name).trim();

        return name
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '');
        // return this.ID;
    }

    get _fullStorageKey() {
        return `${this._parent._fullStorageKey}.${this._storageKey}`;
    }
}
