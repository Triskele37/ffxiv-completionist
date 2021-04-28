import { getPlayerStore } from "./";

export function applyDataToStore(data) {
    getPlayerStore().set({
        [data.storageKey]: diveForSave(data)
    });
}

function diveForSave(currentGroup) {
    const currentLevel = {};

    if(currentGroup.subGroups) {
        currentGroup.subGroups.forEach((subGroup) => {
            currentLevel[subGroup.storageKey] = diveForSave(subGroup);
        });
    }

    if(currentGroup.tasks) {
        currentGroup.tasks.forEach((task) => {
            currentLevel[task.storageKey] = task.completionFlag;
        });
    }

    return currentLevel;
}
