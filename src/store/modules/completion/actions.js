import { data } from '../../../data';
import Store from 'electron-store';
const store = new Store();

export const actions = {
    //------------------------------------------------------- Debug
    logStore (context) {
        console.log(store);
    },
    nukeStore (context) {
        store.clear();
    },
    //------------------------------------------------------- Flag Setters
    setCompletionFlag (context, { storageKey, flag }) {
        bubbleFlagTotals(storageKey, flag);
    },
    setCompletionFlags (context, datas) {
        for(let i = 0; i < datas.length; i++) {
            bubbleFlagTotals(datas[i].storageKey, datas[i].flag);
        }
    },
    //------------------------------------------------------- Summary Setter
    resetTotals (context) {
        store.clear();
        dive(data);
    }
}

function dive(group) {
    const totals = {
        total: 0,
        excluded: 0,
        completed: 0,
    };

    // Count total/completed/excluded in tasks
    if(group.tasks) {
        group.tasks.forEach(function(task) {
            const taskCompleted = store.get(`${group.storageKey}.${task.name}`);

            if(taskCompleted !== 'X') totals.total++;
            else totals.excluded++;

            if(taskCompleted === 'Y') totals.completed++;
        });
    }

    // Dive into sub groups
    if(group.groupKeys) {
        group.groupKeys.forEach(function(groupKey) {
            const subTotals = dive(group[groupKey]);
            totals.total += subTotals.total;
            totals.completed += subTotals.completed;
            totals.excluded += subTotals.excluded;
        });
    }

    // Cache the totals per storageKey
    store.set(`${group.storageKey}.totals`, totals);

    // Sanity log for unset storage keys
    if(!group.storageKey) {
        console.log(`No storage key at ${group.name}`);
    }

    return totals;
}

// Ensure that the flag being set bubbles exclusion, completion, and total
// changes all the way up
function bubbleFlagTotals(storageKey, flag) {
    // Cache the original flag
    const originalFlag = store.get(storageKey) || 'N';

    // Set the new flag
    store.set(storageKey, flag);

    // Split up the storageKey
    const storageKeyPieces = storageKey.split('.');

    // Set totals on each child until the original storageKey
    let curStorageKey = storageKeyPieces[0];
    for(let i = 1; i < storageKeyPieces.length; i++) {
        const newTotals = Object.assign({}, store.get(`${curStorageKey}.totals`));

        // Get flag conversions (N changes are implied from Y changes)
        const wasX = originalFlag === 'X' && flag !== 'X'; // X to ?
        const wasY = originalFlag === 'Y' && flag !== 'Y'; // Y to ?
        const nowX = flag === 'X' && originalFlag !== 'X'; // ? to X
        const nowY = flag === 'Y' && originalFlag !== 'Y'; // ? to Y

        // Adjust totals
        newTotals.excluded += wasX ? -1 : nowX ? 1 : 0;
        newTotals.completed += wasY ? -1 : nowY ? 1 : 0;
        newTotals.total += wasX ? 1 : nowX ? -1 : 0;

        store.set(`${curStorageKey}.totals`, newTotals);

        // Next storage level
        curStorageKey += `.${storageKeyPieces[i]}`
    }
}
