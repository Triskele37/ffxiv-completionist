import { Task } from "./Task";
import { loadJson } from "./loader";
import { eStore } from "../store/electronStore";

export class DataGroup {
    _lang = 'en';
    name;
    _key; // key used for storage

    _parent; // A reference to the parent group

    subGroups;  // Child groups of this group

    columnConfig;
    _defaultCompletion = 'N';
    _isCraftingLogGroup = false;
    tasks;

    _isNumericCompletion = false; // Used for numeric completions
    numericDecimal = 0;

    totalCompleted = 0; // The total of completed tasks of this and children
    totalExcluded = 0;  // The total of excluded tasks of this and children

    // an array of different tasks that should be chained
    // used within the same group
    chains;
    // [1, 2, 3] - simple chain
    // [[1, 2], 3] - combination chain (1 & 2) completes 3

    //------------------------------------------------------------------ Construction
    constructor(json, parent, additionalColumnConfig) {
        this.name = json.groupName;
        this._key = json.key;
        this._parent = parent;
        this.lang = parent ? parent.lang : eStore.get('lang');

        // Inherit things
        if(this._parent) {
            if(this._parent.columnConfig) this.columnConfig = this._parent.columnConfig;
            this.defaultCompletion = this._parent.defaultCompletion;
        }

        if(json.headers) {
            const columnConfig = [];
            Object.keys(json.headers).forEach((key) => {
                columnConfig.push({ key, header: json.headers[key], ...(additionalColumnConfig || {})[key] });
            });

            this.columnConfig = columnConfig;
        }

        if(json.chains) this.chains = json.chains;

        if(json.tasks) this.initializeTasks(json.tasks);

        return this;
    }

    static fromJSON(parent, path, additionalColumnConfig) {
        const json = loadJson(path, parent ? parent.lang : eStore.get('lang'));
        return new DataGroup(json, parent, additionalColumnConfig);
    }

    // used only to allow one json for guildhests instead of 1 per class
    forceName(name) {
        this.name = name;
        this._key = name.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '');
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
    get storageKey() {
        return this._key;
    }

    get fullStorageKey() {
        return (this._parent ? this._parent.fullStorageKey + '.' : '') + this.storageKey;
    }

    //------------------------------------------------------------------ Pathing
    get groupPath() {
        return this._parent ? [...this._parent.groupPath, this.name] : [this.name]
    }

    getFirstParent() {
        let cur = this;
        while(cur._parent) cur = cur._parent;
        return cur;
    }

    getChildGroupFromPath(path, byName) {
        if(typeof path === "string") path = path.split(".");

        // No more path means we're the group being requested
        if(path.length === 0) return this;

        // Pop off the first part of the path and dive
        const nextStep = path.shift();
        return this.getSubGroup(nextStep, byName).getChildGroupFromPath(path);
    }

    getChildGroupWithTaskID(taskID) {
        if(this.tasks) {
            for(let i = 0; i < this.tasks.length; i++) {
                if(this.tasks[i].id === taskID) return this;
            }
        }

        if(this.subGroups) {
            for(let i = 0; i < this.subGroups.length; i++) {
                const hit = this.subGroups[i].getChildGroupWithTaskID(taskID);
                if(hit) return hit;
            }
        }

        return null;
    }

    getSubGroup(subGroupString, byName) {
        if(!this.subGroups) return null;
        for(let i = 0; i < this.subGroups.length; i++) {
            if(byName && this.subGroups[i].name === subGroupString) return this.subGroups[i];
            else if(!byName && this.subGroups[i]._key === subGroupString) return this.subGroups[i];
        }
        return null;
    }

    //------------------------------------------------------------------ Default Completion
    get defaultCompletion() {
        return this._defaultCompletion;
    }

    set defaultCompletion(value) {
        this._defaultCompletion = value;

        if(this.subGroups) {
            this.subGroups.forEach((subGroup) => subGroup.defaultCompletion = value);
        }

        if(this.tasks) {
            this.tasks.forEach((task) => {
                if(!task.defaultCompletion) task.changeCompletionFlag(value);
            });
        }
    }

    //------------------------------------------------------------------ Numeric Completion
    get isNumericCompletion() {
        return this._isNumericCompletion;
    }

    set isNumericCompletion(value) {
        this._isNumericCompletion = value;

        if(this.tasks) this.tasks.forEach((task) => task.isNumericCompletion = value);
    }

    //------------------------------------------------------------------ Craft Group
    get isCraftingLogGroup() {
        return this._isCraftingLogGroup;
    }

    // for now requires being set after subGroups are added
    set isCraftingLogGroup(value) {
        this._isCraftingLogGroup = value;
        (this.subGroups || []).forEach((sg) => sg.isCraftingLogGroup = value);
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
