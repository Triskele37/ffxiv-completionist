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
            if(currentStoreLayer[subGroup._storageKey]) {
                diveForLoad(subGroup, currentStoreLayer[subGroup._storageKey]);
            }
        });
    }

    if(currentGroup.tasks) {
        currentGroup.tasks.forEach((task) => {
            if(currentStoreLayer[task._storageKey]) {
                task.changeCompletionFlag(currentStoreLayer[task._storageKey]);
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
            currentLevel[subGroup._storageKey] = diveForSave(subGroup);
        });
    }

    if(currentGroup.tasks) {
        currentGroup.tasks.forEach((task) => {
            currentLevel[task._storageKey] = task.completionFlag;
        });
    }

    return currentLevel;
}
