import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { APP_CONFIG } from '../../environments/environment';
import { Completion, CompletionFlag, Lang } from '@constant';
import { loadJson } from '@data/loader';

import { GroupDefinition } from './Definition';
import { Column } from './Column';
import { Task } from './Task';

export class DataGroup {
    static overall: DataGroup;
    static lang: Lang;

    _key: string; // key used for storage
    name: string;
    _parent: DataGroup; // A reference to the parent group
    subGroups: Map<string, DataGroup>;  // Child groups of this group
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

        // Show keys when in dev
        if(APP_CONFIG.showKeys) {
            if(this.columns && this.columns[0].key !== 'fullStorageKey') {
                this.columns.unshift({
                    key: 'fullStorageKey',
                    header: 'ID'
                });
            }
        }

        return this;
    }

    static fromJSON(parent: DataGroup, path: string): DataGroup {
        const json = loadJson(path);
        return new DataGroup(json, parent);
    }

    static fromDefinition(parent: DataGroup, definition: GroupDefinition): DataGroup {
        if(definition.subGroups) {
            if(Array.isArray(definition.subGroups)) {
                const group = DataGroup.fromJSON(parent, `${definition.path}`);
                group.subGroups = new Map();

                definition.subGroups.forEach((subGroupDef) => {
                    let subGroup;

                    if(typeof subGroupDef === 'string') {
                        subGroup = DataGroup.fromJSON(group, `${definition.path}/${subGroupDef}`);
                    }
                    else {
                        subGroupDef.path = `${definition.path}/${subGroupDef.path}`;
                        subGroup = DataGroup.fromDefinition(group, subGroupDef);
                    }

                    group.subGroups.set(subGroup._key, subGroup);
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

    get groupPath(): string[] {
        return this._parent ? [...this._parent.groupPath, this.name] : [this.name];
    }

    //#region------------------------------------------------------- Group Handling
    getChildGroup(path: string): DataGroup {
        return this.getChild(path) as DataGroup;
    }

    getChildTask(path: string): Task {
        return this.getChild(path) as Task;
    }

    getChild(path: string): DataGroup | Task {
        if(typeof path !== 'string') return;

        // Separate the path and id
        const segments = path.split('.');
        const id = segments[segments.length - 1].match(/^[0-9]+$/) ?
            parseInt(segments.pop(), 10) : null;

        let group: DataGroup = this;
        for(const segment of segments) {
            group = group.subGroups.get(segment) || group;
        }

        // No id means a group was requested
        if(id === null) {
            // Same group means path didn't work
            return group !== this ? group : null;
        }

        // Look for the task in this group
        for(const task of group.tasks) {
            if(task.id === id) return task;
        }

        return null;
    }

    //#endregion

    //#region------------------------------------------------------- Task Counting
    // The total of completed tasks of this and children
    totalCompleted: number = 0;

    // The total of excluded tasks of this and children
    totalExcluded: number = 0;

    // Total count of all tasks of this group & children
    get total(): number {
        let totalTasks: number = 0;

        this.tasks?.forEach((task) =>
            totalTasks += task.isNumericCompletion ? task.maxValue - task.minValue : 1
        );

        if(this.isBookmarkGroup) return totalTasks;

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
        const num = ((this.totalCompleted / (this.total - this.totalExcluded)) * 100);
        const str = num.toString().match(/^\d+\.?\d{0,2}/)?.[0] || '0.00';
        return str.includes('.') ? str : `${str}.00`;
    }

    get isComplete(): boolean {
        return this.percentComplete === '100.00';
    }

    get isEmpty(): boolean {
        return this.remaining === '0';
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

        this.subGroups?.forEach((subGroup) => subGroup.defaultCompletion = value);

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

    //#endregion

}
