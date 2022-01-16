import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Completion, CompletionFlag, Lang } from '@constant';
import { loadJson } from '@data/loader';
import { ElectronService } from '@service/electron/electron.service';

import { GroupDefinition } from './Definition';
import { Column } from './Column';
import { Task } from './Task';

export class DataGroup {
    static lang: Lang;

    _key: string; // key used for storage
    name: string;
    _parent: DataGroup; // A reference to the parent group
    subGroups: DataGroup[];  // Child groups of this group

    // All task ids of 'tasks' are prefixed with an 'x' to ensure order
    tasks: { [id: string]: Task } = {};

    cCombo; //TODO:

    isCustomGroup: boolean;
    draggable: boolean;
    columns: Column[];

    private updated$ = new Subject<void>();
    onUpdated$ = this.updated$.pipe(debounceTime(250));

    constructor(json, parent: DataGroup) {
        this.name = json.groupName;
        this._key = json.key;
        this._parent = parent;

        this.lang = parent?.lang || DataGroup.lang;

        // Inherit things
        if(this._parent) {
            if(this._parent.columns) this.columns = this._parent.columns;
            this.defaultCompletion = this._parent.defaultCompletion;
        }

        // Apply group level properties
        if(json.defaultCompletion) this.defaultCompletion = json.defaultCompletion;

        if(json.headers) {
            this.columns = Object.keys(json.headers)
                .map((key) => ({ key, ...json.headers[key] }));
        }

        this.isNumericCompletion = !!json.isNumericCompletion;

        // Chain inheritance
        if(json.cCombo) this.cCombo = json.cCombo;

        if(json.tasks) this.initializeTasks(json.tasks);

        return this;
    }

    static fromJSON(svcElectron: ElectronService, parent, path): DataGroup {
        const json = loadJson(svcElectron, path, parent?.lang || DataGroup.lang);
        return new DataGroup(json, parent);
    }

    static fromDefinition(svcElectron: ElectronService, parent: DataGroup, definition: GroupDefinition): DataGroup {
        if(definition.subGroups) {
            if(Array.isArray(definition.subGroups)) {
                const group = DataGroup.fromJSON(svcElectron, parent, `${definition.path}/index`);

                group.subGroups = definition.subGroups.map((subGroup) => {
                    if(typeof subGroup === 'string') {
                        return DataGroup.fromJSON(svcElectron, group, `${definition.path}/${subGroup}`);
                    }
                    else {
                        subGroup.path = `${definition.path}/${subGroup.path}`;
                        return DataGroup.fromDefinition(svcElectron, group, subGroup);
                    }
                });

                return group;
            }
            else {
                return definition.subGroups(svcElectron, parent, definition.path);
            }
        }
        else {
            return DataGroup.fromJSON(svcElectron, parent, definition.path);
        }
    }

    initializeTasks(tasks) {
        for(const id in tasks) {
            if(tasks.hasOwnProperty(id)) {
                const taskObj = new Task(tasks[id], this);

                // Allow groups to have default flags for all child tasks
                if(!taskObj.defaultCompletion) taskObj.setCompletion(this.defaultCompletion);
                // Prioritize task level defaults
                else taskObj.setCompletion(taskObj.defaultCompletion);

                this.tasks[id] = taskObj;
            }
        }

        return this;
    }

    // used only to allow one json for guildhests instead of 1 per class
    forceName(name) {
        this.name = name;
        this._key = name.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '');

        return this;
    }

    //#region------------------------------------------------------- Group Handling
    get groupPath(): string[] {
        return this._parent ? [...this._parent.groupPath, this.name] : [this.name];
    }

    getFirstParent(): DataGroup {
        let group: DataGroup = this;
        while(group._parent) group = group._parent;
        return group;
    }

    getChildGroupFromPath(path: string | string[], byName?: boolean): DataGroup {
        if(typeof path === 'string') path = path.split('.');

        // No more path means we're the group being requested
        if(path.length === 0) return this;

        // Pop off the first part of the path and dive
        const nextStep = path.shift();
        return this.getSubGroup(nextStep, byName).getChildGroupFromPath(path, byName);
    }

    getChildGroupWithTaskID(taskID: string): DataGroup {
        if(this.tasks[taskID] || this.tasks[`x${ taskID }`]) return this;

        if(this.subGroups) {
            for(const item of this.subGroups) {
                const hit = item.getChildGroupWithTaskID(taskID);
                if(hit) return hit;
            }
        }

        return null;
    }

    getSubGroup(nameOrKey: string, byName?: boolean): DataGroup {
        if(!this.subGroups) return null;
        for(const item of this.subGroups) {
            if(byName && item.name === nameOrKey) return item;
            else if(!byName && item._key === nameOrKey) return item;
        }
        return null;
    }

    //#endregion

    //#region------------------------------------------------------- Task Handling
    getTaskAtIndex(index: number): Task {
        const id = Object.keys(this.tasks)[index];
        return this.tasks[id];
    }

    getIndexOfTask(taskId: number): number {
        return Object.values(this.tasks).findIndex((t) => t.id === taskId);
    }

    /** Recursively searches ALL data starting at this group
     * Checks this group and all subGroups first then moves to parent
     * 'hit' prevents searching the same group multiple times
     * */
    getTaskById(taskId: string | number, hit: string[] = []): Task {
        // Bail if recursion already hit this group
        if(hit?.includes(this.fullStorageKey)) return null;

        // Check immediate task collection
        if(this.tasks[taskId]) return this.tasks[taskId];
        if(this.tasks[`x${taskId}`]) return this.tasks[`x${taskId}`];
        hit.push(this.fullStorageKey);

        // Recurse through subGroups
        if(this.subGroups) {
            for(const group of this.subGroups) {
                const task = group.getTaskById(taskId, hit);
                if(task) return task;
            }
        }

        // Check through parents
        return this._parent?.getTaskById(taskId, hit) || null;
    }

    //#endregion

    //#region------------------------------------------------------- Task Counting
    // The total of completed tasks of this and children
    totalCompleted: number = 0;

    // The total of excluded tasks of this and children
    totalExcluded: number = 0;

    get taskCount(): number {
        return this.tasks ? Object.keys(this.tasks).length : null;
    }

    // Total count of all tasks of this group & children
    get total(): number {
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

    get remaining(): string {
        const effectiveTotal = this.total - this.totalExcluded;
        const remaining = effectiveTotal - this.totalCompleted;
        return remaining.toFixed(0);
    }

    get displayTotal(): number {
        return this.total - this.totalExcluded;
    }

    get percentComplete(): string {
        if(!this.total || this.total - this.totalExcluded === 0) return null;
        return ((this.totalCompleted / (this.total - this.totalExcluded)) * 100).toFixed(2);
    }

    // Propagate an excluded change up through parent groups
    updateExcluded(mod: number): void {
        this.totalExcluded += mod;
        this.updated$.next();
        if(this._parent) this._parent.updateExcluded(mod);
    }

    // Propagate a completed change up through parent groups
    updateCompleted(mod: number): void {
        this.totalCompleted += mod;
        this.updated$.next();
        if(this._parent) this._parent.updateCompleted(mod);
    }

    //#endregion

    //#region------------------------------------------------------- Properties
    //#region--------------------------------- Storage Keys
    get storageKey(): string {
        return this._key;
    }

    get fullStorageKey(): string {
        return (this._parent ? this._parent.fullStorageKey + '.' : '') + this.storageKey;
    }

    //#endregion

    //#region--------------------------------- Default Completion
    _defaultCompletion: CompletionFlag = Completion.N;

    get defaultCompletion(): CompletionFlag {
        return this._defaultCompletion;
    }

    set defaultCompletion(value: CompletionFlag) {
        this._defaultCompletion = value;

        if(this.subGroups) {
            this.subGroups.forEach((subGroup) => subGroup.defaultCompletion = value);
        }

        for(const id in this.tasks) {
            if(this.tasks.hasOwnProperty(id) && this.tasks[id].defaultCompletion) {
                this.tasks[id].setCompletion(value);
            }
        }
    }

    //#endregion

    //#region--------------------------------- Numeric Completion
    _isNumericCompletion: boolean = false;
    numericDecimal: number = 0;

    get isNumericCompletion(): boolean {
        return this._isNumericCompletion;
    }

    set isNumericCompletion(value: boolean) {
        this._isNumericCompletion = value;
        Object.values(this.tasks).forEach((task) => task.isNumericCompletion = value);
    }

    //#endregion

    //#region--------------------------------- Language
    _lang: Lang = Lang.EN;

    get lang(): Lang {
        return this._lang;
    }

    set lang(newLang: Lang) {
        this._lang = newLang;
        (this.subGroups || []).forEach((subGroup) => subGroup.lang = newLang);
    }

    //#endregion

    //#region--------------------------------- Crafting Group
    _isCraftingLogGroup: boolean = false;

    get isCraftingLogGroup(): boolean {
        return this._isCraftingLogGroup;
    }

    // for now requires being set after subGroups are added
    set isCraftingLogGroup(value: boolean) {
        this._isCraftingLogGroup = value;
        (this.subGroups || []).forEach((sg) => sg.isCraftingLogGroup = value);
    }

    //#endregion

    //#endregion

}
