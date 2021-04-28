import { Task } from "./Task";
import { loadJson } from "./loader";
import { eStore } from "../store/electronStore";

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

    totalCompleted = 0; // The total of completed tasks of this and children
    totalExcluded = 0;  // The total of excluded tasks of this and children

    //------------------------------------------------------------------ Construction
    constructor(name, parent) {
        this.name = name;
        this._parent = parent;
        this.lang = parent ? parent.lang : eStore.get('lang');

        // Inherit things
        if(this._parent) {
            if(this._parent.columnConfig) this.columnConfig = this._parent.columnConfig;
            this.defaultCompletion = this._parent.defaultCompletion;
        }

        return this;
    }

    static fromJSON(parent, path, additionalColumnConfig) {
        const json = loadJson(path, parent ? parent.lang : eStore.get('lang'));
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
    initializeTasks(tasks) {
        this.tasks = tasks.map((task) => {
            const taskObj = new Task(task, this);

            // Allow groups to have default flags for all child tasks
            if(!taskObj.defaultCompletion) taskObj.changeCompletionFlag(this.defaultCompletion);
            // Prioritize task level defaults
            else taskObj.changeCompletionFlag(taskObj.defaultCompletion);

            return taskObj;
        });

        return this;
    }

    //------------------------------------------------------------------ Task Totals
    // Total count of all tasks of this group & children
    get total() {
        let totalTasks = this.tasks ? this.tasks.length : 0;

        if(this._isNumericCompletion) {
            totalTasks = 0;
            this.tasks.forEach((task) => totalTasks += task.maxValue - task.minValue);
        }

        if(this.subGroups) {
            this.subGroups.forEach((subGroup) => totalTasks += subGroup.total);
        }

        return totalTasks;
    }

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

    //------------------------------------------------------------------ Storage Key
    get _storageKey() {
        // if(!this.name) console.log(this);

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
        }
    }

    //------------------------------------------------------------------ Numeric Completion
    get isNumericCompletion() {
        return this._isNumericCompletion;
    }

    set isNumericCompletion(isNumericCompletion) {
        this._isNumericCompletion = isNumericCompletion;

        if(this.tasks) this.tasks.forEach((task) => task.isNumericCompletion = isNumericCompletion);
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
