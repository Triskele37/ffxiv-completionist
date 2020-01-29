/**
 * - ALL exports need to follow the naming convention of PARENT_PARENT_CHILD
*/
import { Task } from "./Task";

export class DataGroup {
    name = '';  // The UI friendly name

    _parent; // A reference to the parent group
    _fullName; // The full module name for the group
    _name; // The dot accessible name
    _storageKey; // The full storage key of the group

    groupKeys;  // Keys to sub groups of this group

    columnConfig;
    tasks;

    total = 0;     // The total of all tasks of this and children
    totalCompleted = 0; // The total of completed tasks of this and children
    totalExcluded = 0;  // The total of excluded tasks of this and children

    //------------------------------------------------------------------ Construction
    constructor(name, parent) {
        this._parent = parent;
        this._fullName = name;
        this.name = generatePrettyName(name, parent);
        this._name = this.name.replace(/ /g, '_');
        this._storageKey = generateStorageKey(this._name, parent);

        // Inherit things
        if(this._parent) {
            if(this._parent.columnConfig) this.columnConfig = this._parent.columnConfig;
        }
    }

    initializeSubGroups(subGroups) {
        if(!this.groupKeys) this.groupKeys = [];

        for(let i = 0; i < subGroups.length; i++) {
            const subGroup = subGroups[i](subGroups[i].name, this);

            this[subGroup._name] = subGroup;
            this.groupKeys.push(subGroup._name);
        }
    }

    initializeTasks(tasks, columnConfig) {
        this.tasks = tasks.map((task) => new Task(task, this));
        if(columnConfig) this.columnConfig = columnConfig;

        // Update totals
        this.total += this.tasks.length;
        if(this._parent) this._parent.initializeTasksFromSubGroup(this.total);
    }

    initializeTasksFromSubGroup(subGroupTotal) {
        this.total += subGroupTotal;
        if(this._parent) this._parent.initializeTasksFromSubGroup(subGroupTotal);
    }

    //------------------------------------------------------------------
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
    get percentComplete() {
        return ((this.totalCompleted / (this.total - this.totalExcluded)) * 100).toFixed(2);
    }

    get displayTotal() {
        return this.total - this.totalExcluded;
    }
}

function generatePrettyName(name, parent) {
    let output = name;

    // Remove the parent prefix
    if(parent) output = output.replace(`${parent._fullName}_`, '');

    // Replace _ with space
    output = output.replace(/_/g, ' ');

    return output;
}

function generateStorageKey(name, parent) {
    let storageKey = name.toLowerCase().replace(/_/g, '-');
    if(parent) storageKey = `${parent._storageKey}.${storageKey}`;
    return storageKey;
}
