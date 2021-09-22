import { Extendable, GConstructor } from './BaseGroup';

type TCountable = Extendable & GConstructor<{ _isNumericCompletion: boolean }>;

export function Countable<T extends TCountable>(Base: T) {
    return class Counted extends Base {
        totalCompleted = 0; // The total of completed tasks of this and children
        totalExcluded = 0;  // The total of excluded tasks of this and children

        get taskCount() {
            return this.tasks ? Object.keys(this.tasks).length : null;
        }

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
            this.totalCompleted += mod;
            if(this._parent) this._parent.updateCompleted(mod);
        }
    };
}
