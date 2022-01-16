import { ConfigStoreService } from '../config-store.service';
import { SaveStoreService } from '../save-store.service';

type ID = number | string;

export class ChangeStore {
    newStore: any;
    oldStore: any;

    version: string;
    isTesting: boolean;

    constructor(version: string) {
        console.log(`Migrating to ${version}`);

        // Create the initial `overall` object for new users
        if(!SaveStoreService.store.get('overall')) SaveStoreService.store.set('overall', {});

        // Create class properties
        this.oldStore = Object.assign(SaveStoreService.store.get('overall'), {});
        this.newStore = Object.assign(SaveStoreService.store.get('overall'), {});
        this.version = version;

        // Testing flag that allows migration to run more than once
        this.isTesting = !!ConfigStoreService.get('maintain-version');
    }

    // Function to run when finished migrating that actually commits the changes
    write(): void {
        SaveStoreService.store.set('overall', this.newStore);
        if(!this.isTesting) SaveStoreService.store.set('version', this.version);

        // Reset volatile setting
        if(process.env.NODE_ENV === 'development') {
            ConfigStoreService.set('run-volatile', false);
        }
    }

    // Change Helper when task is in same group
    changeKey(groupPath: string, oldId: ID, newId: ID, newToNew?: boolean): void {
        const oldGroup = dive(groupPath, newToNew ? this.newStore : this.oldStore);
        const newGroup = dive(groupPath, this.newStore);

        // Only attempt to apply the change if there was an old value
        if(!!oldGroup && !!oldGroup[oldId]) {
            if(!!newGroup) newGroup[newId] = oldGroup[oldId];
            else console.error(`Updated store missing ${groupPath}`);
        }
    }

    // Change helper when task is in different group
    moveTask(oldGroupPath: string, newGroupPath: string, taskId: ID, newToNew?: boolean): void {
        const oldGroup = dive(oldGroupPath, newToNew ? this.newStore : this.oldStore);
        const newGroup = dive(newGroupPath, this.newStore);

        if(!!oldGroup && !!oldGroup[taskId]) {
            if(!!newGroup) {
                newGroup[taskId] = oldGroup[taskId];

                // Remove the moved task from the updated store
                delete dive(oldGroupPath, this.newStore)[taskId];
            }
            else {
                console.error(`${newGroupPath} does not exist, create it first`);
            }
        }
    }

    // Change helper to move an entire group of tasks
    moveGroup(oldGroupPath: string, newGroupPath: string, newToNew?: boolean): void {
        const oldGroup = dive(oldGroupPath, newToNew ? this.newStore : this.oldStore);

        if(!!oldGroup) {
            // Place the group in the new store where its being moved
            const [newLeftHand, newRightHand] = splitLastSegment(newGroupPath);
            dive(newLeftHand, this.newStore)[newRightHand] = {
                ...dive(newGroupPath, this.newStore), // keep current data if it exists
                ...oldGroup
            };

            // Remove the old group location from the new store
            const [oldLeftHand, oldRightHand] = splitLastSegment(oldGroupPath);
            delete dive(oldLeftHand, this.newStore)[oldRightHand];
        }
        else {
            console.error(`Could not move group: ${oldGroupPath}`);
        }
    }

    // Change helper to create a group
    createGroup(parentGroupPath: string, groupKey: string): void {
        const parentGroup = dive(parentGroupPath, this.newStore);

        // Don't nuke the group creation is called on it more than once
        if(!parentGroup[groupKey]) parentGroup[groupKey] = {};
    }

    // Change helper when task is removed
    deleteTask(groupPath: string, taskId: ID): void {
        const group = dive(groupPath, this.newStore);
        if(!!group) delete group[taskId];
    }

    // Change helper when group is removed
    deleteGroup(groupPath: string): void {
        const groupPathArr = groupPath.split('.');
        const groupToDelete = groupPathArr.pop();

        const groupToDeleteParent = dive(groupPathArr, this.newStore);
        if(!!groupToDeleteParent) delete groupToDeleteParent[groupToDelete];
    }
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
