import { Extendable } from './BaseGroup';

export function Taskable<T extends Extendable>(Base: T) {
    return class Tasked extends Base {
        getTaskAtIndex(index) {
            const id = Object.keys(this.tasks)[index];
            return this.tasks[id];
        }

        getIndexOfTask(taskId) {
            return Object.values(this.tasks).findIndex(
                (t) => t.id === taskId || t.id === `x${ taskId }`
            );
        }

        // Looks for a task ID going upward
        getTaskByID(taskID) {
            if(this.tasks[taskID]) return this.tasks[taskID];
            if(this.tasks[`x${ taskID }`]) return this.tasks[`x${ taskID }`];

            for(let i = 0; i < (this.subGroups || []).length; i++) {
                const task = this.subGroups[i].getDeepTaskByID(taskID);
                if(task) return task;
            }

            return this._parent ? this._parent.getTaskByID(taskID) : null;
        }

        // Looks for a task ID going downward
        getDeepTaskByID(taskID) {
            if(this.tasks[taskID]) return this.tasks[taskID];
            if(this.tasks[`x${ taskID }`]) return this.tasks[`x${ taskID }`];

            for(let i = 0; i < (this.subGroups || []).length; i++) {
                const task = this.subGroups[i].getDeepTaskByID(taskID);
                if(task) return task;
            }

            return null;
        }
    };
}
