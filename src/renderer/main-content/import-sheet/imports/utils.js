import { data } from '../../../../data';
import { applyDataToStore } from '../../../../data/storageUtils';

//----------------------------------------------------------------------------- Common Callback
export const importCallback = function(nameColumnIndex, groups, finalCompare) {
    return (rawText, store) => {
        const importObj = new SheetImport(rawText, nameColumnIndex, finalCompare);

        // Analyze Matches
        groups.forEach((group) => searchGroupForImportedNames(group, importObj));

        // Save
        applyDataToStore(data);

        return importObj;
    };
};

//----------------------------------------------------------------------------- Import Obj Class
export class SheetImport {
    total;
    notInSheet = [];
    finalCompare = (isMatch, task, columns) => isMatch;
    nameColumnIndex;
    sheetRows;
    debugMode = false;

    constructor(sheet, nameColumnIndex, finalCompare) {
        let sheetRows = sheet.split('\n'); // Split each row
        sheetRows = sheetRows.map((row) => row.split('\t')); // Split each column within a row

        // Look for rows that were broken by containing line breaks in the name
        for(let i = 0; i < sheetRows.length; i++) {
            if(sheetRows[i][nameColumnIndex] && sheetRows[i][nameColumnIndex].charAt(0) === '"') {
                const brokenRow = sheetRows.splice(i + 1, 1)[0];
                let fixedName = sheetRows[i][nameColumnIndex]; // Piece before line break
                fixedName += brokenRow.shift(); // Piece after line break
                fixedName = fixedName.substr(1, fixedName.length - 2); // Removes quotes added by line break
                sheetRows[i][nameColumnIndex] = fixedName;

                sheetRows[i] = sheetRows[i].concat(brokenRow);
            }
        }

        // Remove rows that don't have a completed column
        sheetRows = sheetRows.filter((row) => row[0].toUpperCase().match(/^[YNX]$/));

        // Trim name columns
        sheetRows.forEach((row) => row[nameColumnIndex] = row[nameColumnIndex].trim());

        // Search for duplicates and add a prop for their position if found
        const taskObjs = {};
        sheetRows.forEach((row, index) => {
            const rowName = row[nameColumnIndex]

            if(!taskObjs[rowName]) taskObjs[rowName] = { rowName, indexes: [index] };
            else taskObjs[rowName].indexes.push(index);
        });

        Object.keys(taskObjs).forEach((taskName) => {
            if(taskObjs[taskName].indexes.length > 1) {
                taskObjs[taskName].indexes.forEach((rowIndex, dupeIndex) => sheetRows[rowIndex].duplicateIndex = dupeIndex);
            }
        });

        // Set to instance
        this.sheetRows = sheetRows;
        this.total = this.sheetRows.length;
        this.nameColumnIndex = nameColumnIndex;

        if(finalCompare) this.finalCompare = finalCompare;
    }

    get status() {
        return (this.sheetRows.length || (this.debugMode && this.notInSheet.length)) ? 'failure' : 'success';
    }

    get tooltip() {
        let totalUnresolved = this.sheetRows.length;
        if(this.debugMode) totalUnresolved += this.notInSheet.length;

        if(totalUnresolved === 0) {
            return `${this.total} tasks imported`;
        }
        else {
            let tooltip = `${this.total - this.sheetRows.length} tasks imported:\n`;

            if(this.sheetRows.length) {
                tooltip += `Not imported (${this.sheetRows.length}):\n`;
                this.sheetRows.forEach((columns) => tooltip += `${columns[this.nameColumnIndex]}, `);
            }

            if(this.debugMode && this.notInSheet.length) {
                tooltip += `\nNot found in sheet (${this.notInSheet.length}):\n`;
                tooltip += this.notInSheet.join(', ');
            }

            return tooltip;
        }
    }
}

//----------------------------------------------------------------------------- Sheet Traversal
// Recursive function that dive's the current group
export function searchGroupForImportedNames(group, importObj) {
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
        let found = false;

        for(let j = 0; j < importObj.sheetRows.length; j++) {
            const row = importObj.sheetRows[j];

            const isMatch = namesFuzzyMatch(task.name, row[importObj.nameColumnIndex]);
            const isFinalMatch = importObj.finalCompare(isMatch, task, row);

            if(isFinalMatch) {
                found = true;

                const flag = row[0].toUpperCase();
                task.changeCompletionFlag(flag);

                // Remove the matched task
                importObj.sheetRows.splice(j, 1);
                break;
            }
        }

        // Keep track of things not found in the sheet for debugging
        if(!found) importObj.notInSheet.push(task.name);
    }

    function namesFuzzyMatch(taskName, rowName) {
        const fuzzyTaskName = taskName.toLowerCase().replace(/[^a-z0-9 ]/g, '');
        const fuzzyRowName = rowName.toLowerCase().replace(/[^a-z0-9 ]/g, '');

        return fuzzyTaskName === fuzzyRowName;
    }
}
