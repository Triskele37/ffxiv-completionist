import { data } from '../../../data';
import { applyDataToStore } from '../../../store/electronStore/applyDataToStore';

import { SheetMeta } from "./SheetMeta";

//----------------------------------------------------------------------------- Common Callback
export const importCallback = function(rawText) {
    const sheetMeta = new SheetMeta(rawText);

    // Analyze Matches
    if(sheetMeta.groups && sheetMeta.groups.length) {
        sheetMeta.groups.forEach((group) => searchGroupForImportedNames(group, sheetMeta));
    }

    // Save
    applyDataToStore(data);

    return sheetMeta;
};

//----------------------------------------------------------------------------- Sheet Traversal
// Recursive function that dive's the current group
export function searchGroupForImportedNames(group, sheetMeta) {
    if(group.tasks) searchTasksForImportedNames(group, sheetMeta);

    if(group.subGroups) {
        group.subGroups.forEach(
            (subGroup) => searchGroupForImportedNames(subGroup, sheetMeta)
        );
    }
}

// Searches `group` tasks for the imported names
function searchTasksForImportedNames(group, sheetMeta) {
    for(let i = 0; i < group.tasks.length; i++) {
        const task = group.tasks[i];
        const taskName = task.name ? task.name : task.Name;
        let found = false;

        for(let j = 0; j < sheetMeta.sheetTaskArray.length; j++) {
            const row = sheetMeta.sheetTaskArray[j];

            const isMatch = namesFuzzyMatch(taskName, row[sheetMeta.nameColumnIndex]);
            const isFinalMatch = sheetMeta.extraCompare(isMatch, task, row[sheetMeta.nameColumnIndex], row);

            if(isFinalMatch) {
                found = true;

                const flag = row[0].toUpperCase();
                task.changeCompletionFlag(flag);

                // Remove the matched task
                sheetMeta.sheetTaskArray.splice(j, 1);
                break;
            }
        }

        // Keep track of things not found in the sheet for debugging
        if(!found) sheetMeta.notInSheet.push(taskName);
    }

    function namesFuzzyMatch(taskName, rowName) {
        const fuzzyTaskName = taskName.toLowerCase().replace(/[^a-z0-9 ]/g, '');
        const fuzzyRowName = rowName.toLowerCase().replace(/[^a-z0-9 ]/g, '');

        return fuzzyTaskName === fuzzyRowName;
    }
}
