import { Task } from "./Task";
import { loadJson } from "./loader";

export class DataGroup {
    _lang = 'en';
    name;

    _parent; // A reference to the parent group

    subGroups;  // Child groups of this group

    columnConfig;
    _defaultCompletion = 'N';
    tasks;

    _isNumericCompletion = false; // Used for numeric completions
    numericDecimal = 0;

    total = 0;     // The total of all tasks of this and children
    totalCompleted = 0; // The total of completed tasks of this and children
    totalExcluded = 0;  // The total of excluded tasks of this and children

    //------------------------------------------------------------------ Construction
    constructor(name, parent) {
        this.name = name;
        this._parent = parent;
        this.lang = parent ? parent.lang : 'en';

        // Inherit things
        if(this._parent) {
            if(this._parent.columnConfig) this.columnConfig = this._parent.columnConfig;
            this.defaultCompletion = this._parent.defaultCompletion;
        }

        return this;
    }

    static fromJSON(parent, path, additionalColumnConfig) {
        const json = loadJson(path, parent.lang);
        const data = new DataGroup(json.groupName, parent);

        if(json.headers) {
            const columnConfig = [];
            Object.keys(json.headers).forEach((key) => {
                columnConfig.push({ key, header: json.headers[key], ...(additionalColumnConfig || {})[key] });
            });

            data.columnConfig = columnConfig;
        }

        if(json.tasks) data.initializeTasks(json.tasks);

        return data;
    }

    // used only to allow one json for guildhests instead of 1 per class
    forceName(name) {
        this.name = name;
        return this;
    }

    //------------------------------------------------------------------ Post-Construction Inits
    initializeSubGroups(subGroups) {
        if(!this.subGroups) this.subGroups = [];

        for(let i = 0; i < subGroups.length; i++) {
            this.subGroups.push(subGroups[i](this));
        }

        return this;
    }

    initializeTasks(tasks) {
        this.tasks = tasks.map((task) => {
            const taskObj = new Task(task, this);

            // Allow groups to have default flags for all child tasks
            if(!taskObj.defaultCompletion) taskObj.changeCompletionFlag(this.defaultCompletion);
            // Prioritize task level defaults
            else taskObj.changeCompletionFlag(taskObj.defaultCompletion);

            return taskObj;
        });

        this.countTasks();

        return this;
    }

    //------------------------------------------------------------------ Task Totals
    get displayTotal() {
        return this.total - this.totalExcluded;
    }

    get percentComplete() {
        if(!this.total || this.total - this.totalExcluded === 0) return 0;
        return ((this.totalCompleted / (this.total - this.totalExcluded)) * 100).toFixed(2);
    }

    updateExcluded(mod) {
        this.totalExcluded += mod;
        if(this._parent) this._parent.updateExcluded(mod);
    }

    updateCompleted(mod) {
        this.totalCompleted += mod;
        if(this._parent) this._parent.updateCompleted(mod);
    }

    updateTotal(mod) {
        this.total += mod;
        if(this._parent) this._parent.updateTotal(mod);
    }

    countTasks() {
        const oldTotal = this.total;
        let totalTasks = this.tasks.length;

        if(this._isNumericCompletion) {
            totalTasks = 0;
            this.tasks.forEach((task) => totalTasks += task.maxValue - task.minValue);
        }

        // Update Totals
        this.total += totalTasks;
        if(this._parent) this._parent.adjustTaskTotal(totalTasks - oldTotal);
    }

    adjustTaskTotal(totalMod) {
        this.total += totalMod;
        if(this._parent) this._parent.adjustTaskTotal(totalMod);
    }

    //------------------------------------------------------------------ Storage Key
    get _storageKey() {
        return this.name
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '');
    }

    get _fullStorageKey() {
        return (this._parent ? this._parent._fullStorageKey + '.' : '') + this._storageKey;
    }

    //------------------------------------------------------------------ Pathing
    get groupPath() {
        return this._parent ? [...this._parent.groupPath, this.name] : [this.name]
    }

    getChildGroupFromPath(path) {
        // No more path means we're the group being requested
        if(path.length === 0) return this;

        // Pop off the first part of the path and dive
        const nextStep = path.shift();
        return this.sg(nextStep).getChildGroupFromPath(path);
    }

    sg(subGroupName) {
        if(!this.subGroups) return null;
        for(let i = 0; i < this.subGroups.length; i++) {
            if(this.subGroups[i].name === subGroupName) return this.subGroups[i];
        }
        return null;
    }

    //------------------------------------------------------------------ Default Completion
    get defaultCompletion() {
        return this._defaultCompletion;
    }

    set defaultCompletion(defaultCompletion) {
        if(this.subGroups) {
            this.subGroups.forEach((subGroup) => subGroup.defaultCompletion = defaultCompletion);
        }

        if(this.tasks) {
            this.tasks.forEach((task) => {
                if(!task.defaultCompletion) task.changeCompletionFlag(defaultCompletion);
            });

            this.countTasks();
        }
    }

    //------------------------------------------------------------------ Numeric Completion
    get isNumericCompletion() {
        return this._isNumericCompletion;
    }

    set isNumericCompletion(isNumericCompletion) {
        this._isNumericCompletion = isNumericCompletion;

        if(this.tasks) this.tasks.forEach((task) => task.isNumericCompletion = isNumericCompletion);

        this.countTasks();
    }

    //------------------------------------------------------------------ Language
    get lang() {
        return this._lang;
    }

    set lang(newLang) {
        this._lang = newLang;
        (this.subGroups || []).forEach((subGroup) => subGroup.lang = newLang);
    }
}
