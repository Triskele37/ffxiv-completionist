import Store from 'electron-store';
const store = new Store();

export function applyStoreToData(data) {
    if(store.store[data._storageKey]) {
        diveForLoad(data, store.store[data._storageKey]);
    }
}

function diveForLoad(currentGroup, currentStoreLayer) {
    if(currentGroup.subGroups) {
        currentGroup.subGroups.forEach((subGroup) => {
            const last = subGroup._storageKey.split('.').pop();
            if(currentStoreLayer[last]) {
                diveForLoad(subGroup, currentStoreLayer[last]);
            }
        });
    }

    if(currentGroup.tasks) {
        const last = currentGroup._storageKey.split('.').pop();

        currentGroup.tasks.forEach((task) => {
            if(currentStoreLayer[task.name]) {
                task.changeCompletionFlag(currentStoreLayer[task.name]);
            }
        });
    }
}

export function applyDataToStore(data) {
    store.set({
        [data._storageKey]: diveForSave(data)
    });
}

function diveForSave(currentGroup) {
    const currentLevel = {};

    if(currentGroup.subGroups) {
        currentGroup.subGroups.forEach((subGroup) => {
            const last = subGroup._storageKey.split('.').pop();
            currentLevel[last] = diveForSave(subGroup);
        });
    }

    if(currentGroup.tasks) {
        const last = currentGroup._storageKey.split('.').pop();

        currentGroup.tasks.forEach((task) => {
            currentLevel[task.name] = task.completionFlag;
        });
    }

    return currentLevel;
}
