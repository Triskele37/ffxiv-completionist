import { data } from "../../../../data";
import { GROUP_MAP } from "./mapper";

export class SheetMeta {
    total;
    notInSheet = [];
    sheetTaskArray;
    debugMode = false;

    // Derived from GROUP_MAP
    extraCompare = (isMatch, appTask, sheetTaskName, columns) => isMatch;
    nameColumnIndex;

    constructor(sheet) {
        this.sheetTaskArray = convertSheetToArray(sheet);
        this.total = this.sheetTaskArray.length;

        console.log(this.sheetTaskArray.concat());
        console.log(this.sheetTaskArray);
        // markDuplicateTasks(this.sheetTaskArray);

        for(let i = 0; i < GROUP_MAP.length; i++) {
            const groupMeta = GROUP_MAP[i];

            const taskIndex = this.sheetTaskArray[0].indexOf(groupMeta.firstTask);
            if(taskIndex !== -1) {
                this.nameColumnIndex = taskIndex;

                const multipleGroups = groupMeta.groups[0] instanceof Array;
                this.groups = (multipleGroups ? groupMeta.groups : [groupMeta.groups]).map((groups) => {
                    return groups.reduce((acc, key) => acc.sg(key), data);
                });

                if(groupMeta.extraCompare) this.extraCompare = groupMeta.extraCompare;
                break;
            }
        }
    }

    get status() {
        return (this.sheetTaskArray.length || (this.debugMode && this.notInSheet.length)) ? 'failure' : 'success';
    }

    get tooltip() {
        let totalUnresolved = this.sheetTaskArray.length;
        if(this.debugMode) totalUnresolved += this.notInSheet.length;

        if(totalUnresolved === 0) {
            return `${this.total} tasks imported`;
        }
        else {
            let tooltip = `${this.total - this.sheetTaskArray.length} tasks imported:\n\n`;

            if(this.sheetTaskArray.length) {
                tooltip += `Not imported (${this.sheetTaskArray.length}):\n`;
                this.sheetTaskArray.forEach((columns) => tooltip += `${columns[this.nameColumnIndex]}\n`);
            }

            if(this.debugMode && this.notInSheet.length) {
                tooltip += `\nNot found in sheet (${this.notInSheet.length}):\n`;
                tooltip += this.notInSheet.join('\n');
            }

            return tooltip;
        }
    }
}

function convertSheetToArray(sheet) {
    // Cells with line breaks look like: {Col0}\t"{Col1}\n"\t{Col2}
    let cleanSheet = sheet
        .replace(/\t"/g, '\t') // Clean cells that include line breaks
        .replace(/\n"\t/g, '\t') // Clean cells that include line breaks
        .split('\n') // Split each row
        .map((row) => row.split('\t')); // Split each column within a row

    // Remove rows that don't have a completed column
    cleanSheet = cleanSheet.filter((row) => row[0].toUpperCase().match(/^[YNX]$/));

    // Trim columns
    cleanSheet = cleanSheet.map((row) => row.map((col) => col.trim()));

    return cleanSheet;
}

// function markDuplicateTasks(sheetTaskArray) {
//     // Search for duplicates and add a prop for their position if found
//     const taskObjs = {};
//     sheetTaskArray.forEach((row, index) => {
//         const rowName = row[nameColumnIndex];
//
//         if(!taskObjs[rowName]) taskObjs[rowName] = { rowName, indexes: [index] };
//         else taskObjs[rowName].indexes.push(index);
//     });
//
//     Object.keys(taskObjs).forEach((taskName) => {
//         if(taskObjs[taskName].indexes.length > 1) {
//             taskObjs[taskName].indexes.forEach((rowIndex, dupeIndex) => sheetTaskArray[rowIndex].duplicateIndex = dupeIndex);
//         }
//     });
// }
