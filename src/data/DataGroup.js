import { Task } from "./Task";
import { loadJson } from "./loader";
import { eStore } from "../store/electronStore";

export class DataGroup {
    //#region Properties
    _lang = 'en';
    name;
    _key; // key used for storage

    _parent; // A reference to the parent group

    subGroups;  // Child groups of this group

    _columnConfig;
    _defaultCompletion = 'N';
    _isCraftingLogGroup = false;
    tasks = {};

    _isNumericCompletion = false; // Used for numeric completions
    numericDecimal = 0;

    totalCompleted = 0; // The total of completed tasks of this and children
    totalExcluded = 0;  // The total of excluded tasks of this and children

    // an array of different tasks that should be chained
    // used within the same group
    chains;
    // [1, 2, 3] - simple chain
    // [[1, 2], 3] - combination chain (1 & 2) completes 3
    //#endregion

    //#region------------------------------------------------------------------ Construction
    constructor(json, parent, additionalColumnConfig) {
        this.name = json.groupName;
        this._key = json.key;
        this._parent = parent;
        this.lang = parent ? parent.lang : eStore.get('lang');

        // Inherit things
        if(this._parent) {
            if(this._parent._columnConfig) this._columnConfig = this._parent._columnConfig;
            this.defaultCompletion = this._parent.defaultCompletion;
        }

        // Apply group level properties
        if(json.defaultCompletion) this.defaultCompletion = json.defaultCompletion;

        if(json.headers) {
            const columnConfig = [];
            Object.keys(json.headers).forEach((key) => {
                columnConfig.push({ key, header: json.headers[key], ...(additionalColumnConfig || {})[key] });
            });

            this._columnConfig = columnConfig;
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

    initializeTasks(tasks) {
        for(const id in tasks) {
            const taskObj = new Task(tasks[id], this);

            // Allow groups to have default flags for all child tasks
            if(!taskObj.defaultCompletion) taskObj.setCompletionFlag(this.defaultCompletion);
            // Prioritize task level defaults
            else taskObj.setCompletionFlag(taskObj.defaultCompletion);

            this.tasks[id] = taskObj;
        }

        return this;
    }
    //#endregion

    // Only used for debugging to force an id column
    get columnConfig() {
        if(!this._columnConfig) return this._columnConfig;

        //TODO: DEBUG ONLY
        if(!this._columnConfig[0].key !== "id") {
            return this._columnConfig ? [{
                header: "ID",
                key: "id"
            }, ...this._columnConfig] : [];
        }

        return this._columnConfig;
    }

    //#region------------------------------------------------------------------ Task Totals
    // Total count of all tasks of this group & children
    get total() {
        let totalTasks = this.tasks ? this.taskCount : 0;

        if(this._isNumericCompletion) {
            totalTasks = 0;
            Object.values(this.tasks).forEach((task) => totalTasks += task.maxValue - task.minValue);
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
        if(!mod && mod !== 0) debugger;
        this.totalCompleted += mod;
        if(this._parent) this._parent.updateCompleted(mod);
    }
    //#endregion

    //#region------------------------------------------------------------------ Storage Key
    get storageKey() {
        return this._key;
    }

    get fullStorageKey() {
        return (this._parent ? this._parent.fullStorageKey + '.' : '') + this.storageKey;
    }
    //#endregion

    //#region------------------------------------------------------------------ Groups
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
        if(this.tasks[taskID] || this.tasks[`x${taskID}`]) return this;

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
    //#endregion

    //#region------------------------------------------------------------------ Tasks
    get taskCount() {
        return this.tasks ? Object.keys(this.tasks).length : null;
    }

    getTaskAtIndex(index) {
        const id = Object.keys(this.tasks)[index];
        return this.tasks[id];
    }

    getIndexOfTask(taskId) {
        return Object.keys(this.tasks).findIndex(
            (t) => t.id === taskId || t.id === `x${taskId}`
        );
    }

    // Looks for a task ID going upward
    getTaskByID(taskID) {
        if(this.tasks[taskID]) return this.tasks[taskID];
        if(this.tasks[`x${taskID}`]) return this.tasks[`x${taskID}`];

        for(let i = 0; i < (this.subGroups || []).length; i++) {
            const task = this.subGroups[i].getDeepTaskByID(taskID);
            if(task) return task;
        }

        return this._parent ? this._parent.getTaskByID(taskID) : null;
    }

    // Looks for a task ID going downward
    getDeepTaskByID(taskID) {
        if(this.tasks[taskID]) return this.tasks[taskID];
        if(this.tasks[`x${taskID}`]) return this.tasks[`x${taskID}`];

        for(let i = 0; i < (this.subGroups || []).length; i++) {
            const task = this.subGroups[i].getDeepTaskByID(taskID);
            if(task) return task;
        }

        return null;
    }
    //#endregion

    //#region------------------------------------------------------------------ Default Completion
    get defaultCompletion() {
        return this._defaultCompletion;
    }

    set defaultCompletion(value) {
        this._defaultCompletion = value;

        if(this.subGroups) {
            this.subGroups.forEach((subGroup) => subGroup.defaultCompletion = value);
        }

        for(const id in this.tasks) {
            if(this.tasks[id].defaultCompletion) this.tasks[id].setCompletionFlag(value);
        };
    }
    //#endregion

    //#region------------------------------------------------------------------ Numeric Completion
    get isNumericCompletion() {
        return this._isNumericCompletion;
    }

    set isNumericCompletion(value) {
        this._isNumericCompletion = value;

        for(const id in this.tasks) {
            this.tasks[id].isNumericCompletion = value;
        }
    }
    //#endregion

    //#region------------------------------------------------------------------ Craft Group
    get isCraftingLogGroup() {
        return this._isCraftingLogGroup;
    }

    // for now requires being set after subGroups are added
    set isCraftingLogGroup(value) {
        this._isCraftingLogGroup = value;
        (this.subGroups || []).forEach((sg) => sg.isCraftingLogGroup = value);
    }
    //#endregion

    //#region------------------------------------------------------------------ Language
    get lang() {
        return this._lang;
    }

    set lang(newLang) {
        this._lang = newLang;
        (this.subGroups || []).forEach((subGroup) => subGroup.lang = newLang);
    }
    //#endregion
}
