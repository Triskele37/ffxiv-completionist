import { CompletionFlag } from '@constant';
import { SaveStoreService } from '../save-store.service';

type ID = number | string;

export class ChangeStore {
    svcSaveStore: SaveStoreService;
    newStore: any;
    oldStore: any;

    version: string;

    constructor(svcSaveStore: SaveStoreService, version: string) {
        console.log(`Migrating to ${version}`);
        this.svcSaveStore = svcSaveStore;

        // Create the initial `overall` object for new users
        const save = this.svcSaveStore.store.get('overall') || {};

        // Clone the save data
        this.oldStore = Object.assign(save, {}); // original state
        this.newStore = Object.assign(save, {}); // working copy
        this.version = version;
    }

    // Function to run when finished migrating that actually commits the changes
    write(): void {
        this.svcSaveStore.store.set('overall', this.newStore);
        this.svcSaveStore.store.set('version', this.version);
    }

    // Util to get a task
    getTask(groupPath: string, taskId: ID): CompletionFlag {
        const group = dive(groupPath, this.newStore);
        return group?.[taskId];
    }

    setTask(groupPath: string, taskId: ID, flag: CompletionFlag): void {
        const group = dive(groupPath, this.newStore);
        if(group) group[taskId] = flag;
    }

    //#region------------------------------------------------------- Move
    // Change Helper when task is in same group
    changeKey(groupPath: string, oldId: ID, newId: ID, newToNew?: boolean): void {
        const oldGroup = dive(groupPath, newToNew ? this.newStore : this.oldStore);
        const newGroup = dive(groupPath, this.newStore);

        // Only attempt to apply the change if there was an old value
        if(oldGroup?.[oldId]) {
            if(newGroup) {
                newGroup[newId] = oldGroup[oldId];
                delete newGroup[oldId];
            }
            else console.error(`Updated store missing ${groupPath}`);
        }
    }

    // Change helper when task is in different group
    moveTask(oldGroupPath: string, newGroupPath: string, taskId: ID, newToNew?: boolean): void {
        const oldGroup = dive(oldGroupPath, newToNew ? this.newStore : this.oldStore);
        const newGroup = dive(newGroupPath, this.newStore);

        if(oldGroup?.[taskId]) {
            if(newGroup) {
                newGroup[taskId] = oldGroup[taskId];

                // Remove the moved task from the updated store
                delete oldGroup[taskId];
            }
            else {
                console.error(`${newGroupPath} does not exist, create it first`);
            }
        }
    }

    // Change helper when multiple task are in different group
    moveTasks(oldGroupPath: string, newGroupPath: string, taskIds: ID[], newToNew?: boolean): void {
        const oldGroup = dive(oldGroupPath, newToNew ? this.newStore : this.oldStore);
        const newGroup = dive(newGroupPath, this.newStore);

        taskIds.forEach((taskId) => {
            if(oldGroup?.[taskId]) {
                if(newGroup) {
                    newGroup[taskId] = oldGroup[taskId];

                    // Remove the moved task from the updated store
                    delete oldGroup[taskId];
                }
                else {
                    console.error(`${newGroupPath} does not exist, create it first`);
                }
            }
        });
    }

    // Change helper to move an entire group of tasks
    moveGroup(oldGroupPath: string, newGroupPath: string, newToNew?: boolean): void {
        const oldGroup = dive(oldGroupPath, newToNew ? this.newStore : this.oldStore);

        if(oldGroup) {
            // Place the group in the new store where its being moved
            const [newLeftHand, newRightHand] = splitLastSegment(newGroupPath);
            const newGroup = {
                ...dive(newGroupPath, this.newStore), // keep current data if it exists
                ...oldGroup
            };

            // Remove the old group location from the new store
            const [oldLeftHand, oldRightHand] = splitLastSegment(oldGroupPath);
            delete dive(oldLeftHand, this.newStore)[oldRightHand];

            // Set the new location (done after delete in case paths converge)
            dive(newLeftHand, this.newStore)[newRightHand] = newGroup;
        }
        else {
            console.error(`Could not move group: ${oldGroupPath}`);
        }
    }

    //#endregion

    //#region------------------------------------------------------- Delete
    // Change helper when task is removed
    deleteTask(groupPath: string, taskId: ID): void {
        const group = dive(groupPath, this.newStore);
        if(group) delete group[taskId];
    }

    // Change helper when tasks are removed
    deleteTasks(groupPath: string, taskIdsOrRange: ID[] | string): void {
        const group = dive(groupPath, this.newStore);
        if(!group) return;

        if(typeof taskIdsOrRange !== 'string') {
            taskIdsOrRange.forEach((taskId) => delete group[taskId]);
        }
        else {
            const [startStr, endStr] = taskIdsOrRange.split('-');
            const start = parseInt(startStr, 10);
            const end = parseInt(endStr, 10);

            for(let i = start; i <= end; i++) {
                delete group[i];
            }
        }
    }

    // Change helper when group is removed
    deleteGroup(groupPath: string): void {
        const groupPathArr = groupPath.split('.');
        const groupToDelete = groupPathArr.pop();

        const groupToDeleteParent = dive(groupPathArr, this.newStore);
        if(!!groupToDeleteParent) delete groupToDeleteParent[groupToDelete];
    }

    //#endregion

}

// Dives a given path, creating objects along the way, returning the final object
function dive(path: string | string[], store: any): any {
    const pathSegments = typeof path === 'string' ? path.split('.') : path;

    let cur = store;
    for(const item of pathSegments) {
        if(!cur[item]) cur[item] = {};
        cur = cur[item];
    }

    return cur;
}

// Returns the path string as [everything to the left of the final segment, the final segment]
function splitLastSegment(path: string): [string, string] {
    const leftSegments = path.split('.');
    const rightSegment = leftSegments.pop(); // Grabs the last dot accessor

    // Recombine the rest of the left hand dots
    return [leftSegments.join('.'), rightSegment];
}
