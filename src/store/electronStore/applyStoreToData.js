import { getPlayerStore } from "./";

export function applyStoreToData(data) {
    if(getPlayerStore().store[data.storageKey]) {
        diveForLoad(data, getPlayerStore().store[data.storageKey]);
    }
}

function diveForLoad(currentGroup, currentStoreLayer) {
    if(currentGroup.subGroups) {
        currentGroup.subGroups.forEach((subGroup) => {
            if(currentStoreLayer[subGroup.storageKey]) {
                diveForLoad(subGroup, currentStoreLayer[subGroup.storageKey]);
            }
        });
    }

    for(const id in currentGroup.tasks) {
        const task = currentGroup.tasks[id];

        if(currentStoreLayer[task.storageKey]) {
            if(!currentGroup.isNumericCompletion) {
                task.setCompletionFlag(currentStoreLayer[task.storageKey]);
            }
            else {
                task.changeCompletionNumber(currentStoreLayer[task.storageKey]);
            }
        }
    }
}
