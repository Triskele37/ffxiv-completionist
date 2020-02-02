import { data } from '../../../../data';
import { importCallback, SheetImport, searchGroupForImportedNames } from './utils';

export const GatheringLogSection = {
    name: "Gathering Logs",
    tabs: [
        {
            title: "Miner Logs",
            importCallback: (rawText, store) => {
                const importObj = new SheetImport(rawText, 3, (task, columns) => columns[1] === 'Mining');
                searchGroupForImportedNames(data.Gathering_Log.Mining, importObj);
                importObj.secondaryCompare = (task, columns) => columns[1] === 'Quarrying';
                searchGroupForImportedNames(data.Gathering_Log.Quarrying, importObj);
                return importObj;
            },
        },
        {
            title: "Botanist Logs",
            importCallback: (rawText, store) => {
                const importObj = new SheetImport(rawText, 3, (task, columns) => columns[1] === 'Logging');
                searchGroupForImportedNames(data.Gathering_Log.Logging, importObj);
                importObj.secondaryCompare = (task, columns) => columns[1] === 'Harvesting';
                searchGroupForImportedNames(data.Gathering_Log.Harvesting, importObj);
                return importObj;
            },
        },
        {
            title: "Fishing Logs",
            importCallback: importCallback(2, [
                data.Gathering_Log.Fishing.Log,
                data.Gathering_Log.Spearfishing.Log
            ]),
        },
        {
            title: "Fishing Guide",
            importCallback: importCallback(1, [
                data.Gathering_Log.Fishing.Guide,
                data.Gathering_Log.Spearfishing.Guide
            ]),
        },
    ]
};
