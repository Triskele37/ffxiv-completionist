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
    setCompletionFlag (context, data) {
        store.set(data.storageKey, data.flag);
    },
    setCompletionFlags (context, datas) {
        for(let i = 0; i < datas.length; i++) {
            store.set(datas[i].storageKey, datas[i].flag);
        }
    },
    //------------------------------------------------------- Summary Setter
    calculateCompletionSummaries (context) {
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

    // Dive into subGroups
    if(group.subGroups) {
        group.subGroups.forEach(function(subGroup) {
            const subTotals = dive(subGroup);
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
