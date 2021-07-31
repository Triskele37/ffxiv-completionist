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

    for(const id in currentGroup.tasks) {
        const task = currentGroup.tasks[id];
        currentLevel[task.storageKey] = task.completionFlag;
    }

    return currentLevel;
}
