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

    if(currentGroup.tasks) {
        currentGroup.tasks.forEach((task) => {
            if(currentStoreLayer[task.storageKey]) {
                if(!currentGroup.isNumericCompletion) {
                    task.changeCompletionFlag(currentStoreLayer[task.storageKey]);
                }
                else {
                    task.changeCompletionNumber(currentStoreLayer[task.storageKey]);
                }
            }
        });
    }
}
