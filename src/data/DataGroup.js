import { Task } from "./Task";

export class DataGroup {
    _lang = 'en';
    name_en;
    name_fr;

    _parent; // A reference to the parent group

    subGroups;  // Child groups of this group

    columnConfig;
    defaultCompletion = 'N';
    tasks;

    isNumericCompletion = false; // Used for numeric completions
    numericDecimal = 0;

    total = 0;     // The total of all tasks of this and children
    totalCompleted = 0; // The total of completed tasks of this and children
    totalExcluded = 0;  // The total of excluded tasks of this and children

    //------------------------------------------------------------------ Construction
    constructor(name, parent) {
        this.name_en = name;
        this._parent = parent;
        this.lang = 'en';

        // Inherit things
        if(this._parent) {
            if(this._parent.columnConfig) this.columnConfig = this._parent.columnConfig;
            this.defaultCompletion = this._parent.defaultCompletion;
        }

        return this;
    }

    initializeSubGroups(subGroups) {
        if(!this.subGroups) this.subGroups = [];

        for(let i = 0; i < subGroups.length; i++) {
            this.subGroups.push(subGroups[i](this));
        }

        return this;
    }

    initializeTasks(tasks, columnConfig) {
        this.tasks = tasks.map((task) => {
            const taskObj = new Task(task, this);

            // Allow groups to have default flags for all child tasks
            if(!taskObj.defaultCompletion) taskObj.changeCompletionFlag(this.defaultCompletion);
            // Prioritize task level defaults
            else taskObj.changeCompletionFlag(taskObj.defaultCompletion);

            return taskObj;
        });

        // Allow a manually passed config to override an inherited config
        if(columnConfig) this.columnConfig = columnConfig;

        // Determine how to calculate totals
        let totalTasks = this.tasks.length;

        if(this.isNumericCompletion) {
            totalTasks = 0;
            this.tasks.forEach((task) => totalTasks += task.maxValue - task.minValue);
        }

        // Update Totals
        this.total += totalTasks;
        if(this._parent) this._parent.initializeTasksFromSubGroup(totalTasks);

        return this;
    }

    initializeTasksFromSubGroup(subGroupTotal) {
        this.total += subGroupTotal;
        if(this._parent) this._parent.initializeTasksFromSubGroup(subGroupTotal);
    }

    initializeLocalization(lang) {

    }

    //------------------------------------------------------------------ Task Update
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

    //------------------------------------------------------------------ Getters
    get _storageKey() {
        return this.name_en
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '');
    }

    get _fullStorageKey() {
        return (this._parent ? this._parent._fullStorageKey + '.' : '') + this._storageKey;
    }

    get percentComplete() {
        if(!this.total || this.total - this.totalExcluded === 0) return 0;
        return ((this.totalCompleted / (this.total - this.totalExcluded)) * 100).toFixed(2);
    }

    get displayTotal() {
        return this.total - this.totalExcluded;
    }

    get groupPath() {
        return this._parent ? [...this._parent.groupPath, this.name] : [this.name]
    }

    //------------------------------------------------------------------ Language
    get lang() {
        return this._lang;
    }

    set lang(newLang) {
        this._lang = newLang;
        this.name = this[`name_${newLang}`] || this.name_en;

        (this.subGroups || []).forEach((subGroup) => {
            subGroup.lang = newLang;
        });
    }
}
