// Parse Sheet
export const generateImportObj = function(sheet, nameColumnIndex) {
    let parsed = sheet.split('\n');                // Split each row
    parsed = parsed.map((row) => row.split('\t')); // Split each column within a row

    // Remove rows that don't have a completed column
    parsed = parsed.filter((row) => row[0].match(/^[YNX]$/));

    // Generate the dictionary: { [name]: completed }
    const dict = {};
    parsed.forEach((row) => {
        const name = row[nameColumnIndex].trim();
        dict[name] = row[0];
    });

    return {
        startTime: new Date().getTime(),
        total: Object.keys(dict).length,
        dict
    };
}

// store: Passed to simplify store callbacks
// group: The deep level group expected to contain the sheet rows
// rows: The modified input from the sheet
export const findAndSetFlags = function(store, group, dict) {
    for(let i = 0; i < group.tasks.length; i++) {
        const task = group.tasks[i];
        const matchedName = getMatchedName(task.name);

        if(matchedName) {
            store.dispatch('setCompletionFlag', {
                storageKey: `${group.storageKey}.${task.name}`,
                flag: dict[matchedName]
            });

            // Remove the matched task
            delete dict[matchedName];
        }
    }

    function getMatchedName(taskName) {
        // 1-1 Matched Name
        if(dict[taskName]) return taskName;

        // Matched minus the (L) for large scale leves
        const lsName = taskName.replace(' (L)', '');
        if(dict[lsName]) return lsName;

        // No Match
        return null;
    }
}

// Recursive Find
export const findRecursive = function(store, group, dict) {
    if(group.tasks) findAndSetFlags(store, group, dict);

    if(group.groupKeys) {
        group.groupKeys.forEach((groupKey) => findRecursive(store, group[groupKey], dict));
    }
}
