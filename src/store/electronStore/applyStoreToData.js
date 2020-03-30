import { getPlayerStore } from "./";

export function applyStoreToData(data) {
    if(getPlayerStore().store[data._storageKey]) {
        diveForLoad(data, getPlayerStore().store[data._storageKey]);
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
