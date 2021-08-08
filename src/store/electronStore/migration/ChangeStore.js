import { getPlayerStore } from "../index";

export class ChangeStore {
    newStore;
    oldStore;
    version;
    isTesting;

    constructor(version, disableTesting) {
        console.log(`Migrating to ${version}`);

        // Create the initial `overall` object for new users
        if(!getPlayerStore().get('overall')) getPlayerStore().set('overall', {});

        // Create class properties
        this.oldStore = Object.assign(getPlayerStore().get('overall'), {});
        this.newStore = Object.assign(getPlayerStore().get('overall'), {});
        this.version = version;

        // Testing flag that allows migration to run more than once
        this.isTesting = process.env.NODE_ENV === 'development' && !disableTesting;
    }

    // Function to run when finished migrating that actually commits the changes
    write() {
        getPlayerStore().set('overall', this.newStore);
        if(!this.isTesting) getPlayerStore().set('version', this.version);
    }

    // Change Helper when task is in same group
    changeKey(groupPath, oldTaskKey, newTaskKey) {
        const oldGroup = dive(groupPath, this.oldStore);
        const newGroup = dive(groupPath, this.newStore);

        // Only attempt to apply the change if there was an old value
        if(!!oldGroup && !!oldGroup[oldTaskKey]) {
            if(!!newGroup) newGroup[newTaskKey] = oldGroup[oldTaskKey];
            else console.error(`Updated store missing ${groupPath}`);
        }
    }

    // Change helper when task is in different group
    moveTask(oldGroupPath, newGroupPath, taskKey) {
        const oldGroup = dive(oldGroupPath, this.oldStore);
        const newGroup = dive(newGroupPath, this.newStore);

        if(!!oldGroup && !!oldGroup[taskKey]) {
            if(!!newGroup) {
                newGroup[taskKey] = oldGroup[taskKey];

                // Remove the moved task from the updated store
                delete dive(oldGroupPath, this.newStore)[taskKey];
            }
            else {
                console.error(`${newGroupPath} does not exist, create it first`);
            }
        }
    }

    // Change helper to move an entire group of tasks
    moveGroup(oldGroupPath, newGroupPath) {
        const oldGroup = dive(oldGroupPath, this.oldStore);

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
    createGroup(parentGroupPath, groupKey) {
        const parentGroup = dive(parentGroupPath, this.newStore);

        // Don't nuke the group creation is called on it more than once
        if(!parentGroup[groupKey]) parentGroup[groupKey] = {};
    }

    // Change helper when task is removed
    deleteTask(groupPath, taskKey) {
        const group = dive(groupPath, this.newStore);
        if(!!group) delete group[taskKey];
    }
}

// Dives a given path, creating objects along the way, returning the final object
function dive(path, store) {
    const pathSegments = path.split('.');

    let cur = store;
    for(let i = 0; i < pathSegments.length; i++) {
        if(!cur[pathSegments[i]]) cur[pathSegments[i]] = {};
        cur = cur[pathSegments[i]];
    }

    return cur;
}

// Returns the path string as [everything to the left of the final segment, the final segment]
function splitLastSegment(path) {
    let leftSegments = path.split('.');
    const rightSegment = leftSegments.pop(); // Grabs the last dot accessor
    leftSegments = leftSegments.join('.'); // Recombine the rest of the left hand dots

    return [leftSegments, rightSegment];
}
