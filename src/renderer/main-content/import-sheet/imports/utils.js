// Base import callback
export const importCallback = function(nameColumnIndex, groups) {
    return (rawText, store) => {
        const importObj = generateImportObj(rawText, nameColumnIndex);

        // Analyze Matches
        groups.forEach((group) => searchGroupForImportedNames(group, importObj));

        // Save
        /*if(importObj.storeSetterObj) {
            store.dispatch('setCompletionFlags', importObj.storeSetterObj);
        }*/

        return importObj;
    };
}

// Parses the pasted sheet and generates an object to work with
function generateImportObj(sheet, nameColumnIndex) {
    let parsed = sheet.split('\n');                // Split each row
    parsed = parsed.map((row) => row.split('\t')); // Split each column within a row

    // Remove rows that don't have a completed column
    parsed = parsed.filter((row) => row[0].match(/^[YNX]$/));

    // Generate the dictionary: { [name]: completed }
    const dictionary = {};
    parsed.forEach((row) => {
        const name = row[nameColumnIndex].trim();
        dictionary[name] = row[0];
    });

    return {
        startTime: new Date().getTime(),
        total: Object.keys(dictionary).length,
        dictionary,
    };
}

// Recursive function that dive's the current group
function searchGroupForImportedNames(group, importObj) {
    if(group.tasks) searchTasksForImportedNames(group, importObj);

    if(group.groupKeys) {
        group.groupKeys.forEach(
            (groupKey) => searchGroupForImportedNames(group[groupKey], importObj)
        );
    }
}

// Searches `group` tasks for the imported names
function searchTasksForImportedNames(group, importObj) {
    for(let i = 0; i < group.tasks.length; i++) {
        const task = group.tasks[i];
        const matchedName = getMatchedName(task.name, importObj.dictionary);

        if(matchedName) {
            const storageKey = `${group.storageKey}.${task.name}`;
            const flag = importObj.dictionary[matchedName]

            task.changeCompletionFlag(flag);

            // Remove the matched task (may not be necessary now)
            delete importObj.dictionary[matchedName];
        }
    }
}

// Determines if the task name matches the imported name
function getMatchedName(taskName, dictionary) {
    // 1-1 Matched Name
    if(dictionary[taskName]) return taskName;

    // Special case for large-scale levequests
    const lsName = taskName.replace(' (L)', '');
    if(dictionary[lsName]) return lsName;

    // No Match
    return null;
}
