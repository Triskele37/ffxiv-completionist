import { data } from '../../../../data';
import { generateImportObj, findRecursive } from './utils';

export const GatheringLogSection = {
    name: "Gathering Logs",
    tabs: [
        {
            title: "Miner Logs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 3);

                findRecursive(store, data.Gathering_Logs.Mining_Log, result.dict);
                findRecursive(store, data.Gathering_Logs.Quarrying_Log, result.dict);

                return result;
            },
        },
        {
            title: "Botanist Logs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 3);

                findRecursive(store, data.Gathering_Logs.Harvesting_Log, result.dict);
                findRecursive(store, data.Gathering_Logs.Logging_Log, result.dict);

                return result;
            },
        },
        {
            title: "Fishing Logs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findRecursive(store, data.Gathering_Logs.Fishing_Log, result.dict);

                return result;
            },
        },
        {
            title: "Fishing Guide",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findRecursive(store, data.Gathering_Logs.Fishing_Guide_Fishing, result.dict);
                findRecursive(store, data.Gathering_Logs.Fishing_Guide_Spearfishing, result.dict);

                return result;
            },
        },
    ]
};
