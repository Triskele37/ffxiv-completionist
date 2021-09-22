import { Extendable } from './BaseGroup';

export function Groupable<T extends Extendable>(Base: T) {
    return class Grouped extends Base {
        get groupPath() {
            return this._parent ? [...this._parent.groupPath, this.name] : [this.name];
        }

        getFirstParent() {
            let cur = this;
            while(cur._parent) cur = cur._parent;
            return cur;
        }

        getChildGroupFromPath(path, byName?: boolean) {
            if(typeof path === 'string') path = path.split('.');

            // No more path means we're the group being requested
            if(path.length === 0) return this;

            // Pop off the first part of the path and dive
            const nextStep = path.shift();
            return this.getSubGroup(nextStep, byName).getChildGroupFromPath(path, byName);
        }

        getChildGroupWithTaskID(taskID) {
            if(this.tasks[taskID] || this.tasks[`x${ taskID }`]) return this;

            if(this.subGroups) {
                for(const item of this.subGroups) {
                    const hit = item.getChildGroupWithTaskID(taskID);
                    if(hit) return hit;
                }
            }

            return null;
        }

        getSubGroup(subGroupString, byName?: boolean) {
            if(!this.subGroups) return null;
            for(const item of this.subGroups) {
                if(byName && item.name === subGroupString) return item;
                else if(!byName && item._key === subGroupString) return item;
            }
            return null;
        }
    };
}
