import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Completion, CompletionFlag, Lang } from '@constant';
import { loadJson } from '@data/loader';
import { ElectronService } from '@service/electron/electron.service';

import { GroupDefinition } from './Definition';
import { Column } from './Column';
import { Task } from './Task';

export class DataGroup {
    static svcElectron: ElectronService;
    static lang: Lang;

    _key: string; // key used for storage
    name: string;
    _parent: DataGroup; // A reference to the parent group
    subGroups: DataGroup[];  // Child groups of this group
    tasks: Task[] = [];

    cCombo; //TODO:

    isCustomGroup: boolean;
    isBookmarkGroup: boolean;
    isCraftingLogGroup: boolean = false;
    draggable: boolean;
    columns: Column[];

    updated$: Subject<void> = new Subject<void>();
    onUpdated$: Observable<void> = this.updated$.pipe(debounceTime(250));

    //#region UI Members
    isUiGroup: boolean;
    noContent: boolean;
    component: any;
    visible: boolean; // Whether to hide in the nav-drawer
    //#endregion

    constructor(json, parent: DataGroup) {
        this.name = json.groupName;
        this._key = json.key;
        this._parent = parent;

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
        this.numericDecimal = json.numericDecimal;
        this.isCraftingLogGroup = !!(json.isCraftingLogGroup ?? parent?.isCraftingLogGroup);

        // Chain inheritance
        if(json.cCombo) this.cCombo = json.cCombo;

        if(json.tasks) this.initializeTasks(json.tasks);

        // UI
        if(parent?.isUiGroup || json.isUiGroup) this.isUiGroup = true;
        if(json.component) this.component = json.component;
        if(json.noContent) this.noContent = true;
        this.visible = json.visible !== false;

        // Uncomment to show a column for task ids
        // if(this.columns && this.columns[0].key !== 'id') {
        //     this.columns.unshift({
        //         key: 'id',
        //         header: 'ID'
        //     });
        // }

        return this;
    }

    static fromJSON(parent: DataGroup, path: string): DataGroup {
        const json = loadJson(DataGroup.svcElectron, path, DataGroup.lang);
        return new DataGroup(json, parent);
    }

    static fromDefinition(parent: DataGroup, definition: GroupDefinition): DataGroup {
        if(definition.subGroups) {
            if(Array.isArray(definition.subGroups)) {
                const group = DataGroup.fromJSON(parent, `${definition.path}/index`);

                group.subGroups = definition.subGroups.map((subGroup) => {
                    if(typeof subGroup === 'string') {
                        return DataGroup.fromJSON(group, `${definition.path}/${subGroup}`);
                    }
                    else {
                        subGroup.path = `${definition.path}/${subGroup.path}`;
                        return DataGroup.fromDefinition(group, subGroup);
                    }
                });

                return group;
            }
            else {
                return definition.subGroups(parent, definition.path);
            }
        }
        else {
            return DataGroup.fromJSON(parent, definition.path);
        }
    }

    initializeTasks(tasks): DataGroup {
        Object.keys(tasks).forEach((id) => {
            const task = new Task(tasks[id], this);

            // Allow groups to have default flags for all child tasks
            if(!task.defaultCompletion) task.setCompletion(this.defaultCompletion);
            // Prioritize task level defaults
            else task.setCompletion(task.defaultCompletion);

            this.tasks.push(task);
        });

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
        const subGroup = this.getSubGroup(path.shift(), byName);
        return subGroup?.getChildGroupFromPath(path, byName);
    }

    getChildGroupWithTaskID(taskId: number): DataGroup {
        const task = this.tasks.find((t) => t.id === taskId);
        if(task) return this;

        if(this.subGroups) {
            for(const item of this.subGroups) {
                const hit = item.getChildGroupWithTaskID(taskId);
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
    getIndexOfTask(taskId: number): number {
        return this.tasks.findIndex((t) => t.id === taskId);
    }

    /** Recursively searches ALL data starting at this group
     * Checks this group and all subGroups first then moves to parent
     * 'hit' prevents searching the same group multiple times
     * */
    getTaskById(taskId: number, hit: string[] = []): Task {
        // Bail if recursion already hit this group
        if(hit?.includes(this.fullStorageKey)) return null;

        // Check immediate task collection
        const task = this.tasks.find((t) => t.id === taskId);
        if(task) return task;

        hit.push(this.fullStorageKey);

        // Recurse through subGroups
        if(this.subGroups) {
            for(const group of this.subGroups) {
                const subTask = group.getTaskById(taskId, hit);
                if(subTask) return subTask;
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

    // Total count of all tasks of this group & children
    get total(): number {
        let totalTasks = this.tasks?.length ||  0;
        if(this.isBookmarkGroup) return totalTasks;

        if(this._isNumericCompletion) {
            totalTasks = 0;
            Object.values(this.tasks).forEach((task) => totalTasks += task.maxValue - task.minValue);
        }

        this.subGroups?.forEach((subGroup) => totalTasks += subGroup.total);

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
        if(this.isBookmarkGroup) return;

        this.totalExcluded += mod;
        this.updated$.next();
        this._parent?.updateExcluded(mod);
    }

    // Propagate a completed change up through parent groups
    updateCompleted(mod: number): void {
        if(this.isBookmarkGroup) return;

        this.totalCompleted += mod;
        this.updated$.next();
        this._parent?.updateCompleted(mod);
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

        this.tasks.forEach((task) => {
            if(task.defaultCompletion) task.setCompletion(value);
        });
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
        this.tasks.forEach((task) => task.isNumericCompletion = value);
    }

    //#endregion

}
