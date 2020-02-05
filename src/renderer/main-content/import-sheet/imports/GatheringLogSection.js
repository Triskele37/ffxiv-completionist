import { data } from '../../../../data';
import { importCallback, SheetImport, searchGroupForImportedNames } from './utils';

export const GatheringLogSection = {
    name: "Gathering Logs",
    tabs: [
        {
            title: "Miner Logs",
            importCallback: (rawText, store) => {
                const importObj = new SheetImport(rawText, 3, (isMatch, task, columns) => {
                    if(!columns[1] === 'Mining' || isMatch) return isMatch && columns[1] === 'Mining';

                    if(task.name === 'Skybuilders\' Hardsilver Ore' && columns[3] === 'Skybuilders\' Hardsilve Ore') return true;
                    return false;
                });
                searchGroupForImportedNames(data.Gathering_Log.Mining, importObj);

                importObj.finalCompare = (isMatch, task, columns) => {
                    if(!columns[1] === 'Quarrying' || isMatch) return isMatch && columns[1] === 'Quarrying';

                    if(task.name === 'Amh Araeng Seasonings' && columns[3] === 'Kholusian Seasonings') return true;
                    return false;
                };
                searchGroupForImportedNames(data.Gathering_Log.Quarrying, importObj);

                return importObj;
            },
        },
        {
            title: "Botanist Logs",
            importCallback: (rawText, store) => {
                const importObj = new SheetImport(rawText, 3, (isMatch, task, columns) => {
                    return isMatch && columns[1] === 'Logging';
                });
                searchGroupForImportedNames(data.Gathering_Log.Logging, importObj);

                importObj.finalCompare = (isMatch, task, columns) => {
                    if(!columns[1] === 'Harvesting' || isMatch) return isMatch && columns[1] === 'Harvesting';

                    if(task.name === 'Skybuilders\' Adder' && columns[3] === 'Skybuilders\'s Adder') return true;
                    if(task.name === 'Amh Araeng Seasonings' && columns[3] === 'Kholusian Seasonings') return true;
                    if(task.name === 'Yanxian Cotton Boll' && columns[3] === 'Yanzian Cotton Boll') return true;
                    return false;
                };
                searchGroupForImportedNames(data.Gathering_Log.Harvesting, importObj);

                return importObj;
            },
        },
        {
            title: "Fishing Logs",
            importCallback: (rawText, store) => {
                const nameColumnIndex = rawText.split('\n')[0].split('\t').indexOf('Log');
                const importObj = new SheetImport(rawText, nameColumnIndex, (isMatch, task, columns) => {
                    if(isMatch) return true;
                    
                    if(task.name === 'The Lozatl' && columns[nameColumnIndex] === 'The Rotzatl') return true;
                    if(task.name === 'The Lozatl' && columns[nameColumnIndex] === 'The Lotzatl') return true;

                    return false;
                });

                searchGroupForImportedNames(data.Gathering_Log.Fishing.Log, importObj);
                searchGroupForImportedNames(data.Gathering_Log.Spearfishing.Log, importObj);

                return importObj;
            },
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
