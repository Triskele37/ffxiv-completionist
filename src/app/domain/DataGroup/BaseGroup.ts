import { Task } from '../Task';

export class BaseGroup {
    _key; // key used for storage
    name: string;
    _parent; // A reference to the parent group
    subGroups;  // Child groups of this group
    tasks: { [key: string]: Task } = {};

    component;
    text;

    constructor(json, parent) {
        this.name = json.groupName;
        this._key = json.key;
        this._parent = parent;
    }

    get storageKey() {
        return this._key;
    }

    get fullStorageKey() {
        return (this._parent ? this._parent.fullStorageKey + '.' : '') + this.storageKey;
    }

    // used only to allow one json for guildhests instead of 1 per class
    forceName(name) {
        this.name = name;
        this._key = name.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '');

        return this;
    }
}

export type GConstructor<T = any> = new (...args: any[]) => T;
export type Extendable = GConstructor<BaseGroup>;
