import { data } from '../../../../data';
import { generateImportObj, findRecursive } from './utils';

export const MultiplayerSection = {
    name: "Multiplayer",
    tabs: [
        {
            title: "Dungeons",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 3);

                findRecursive(store, data.Duty.Dungeons, result.dict);

                return result;
            },
        },
        {
            title: "Raids",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 3);

                findRecursive(store, data.Duty.Raids, result.dict);

                return result;
            },
        },
        {
            title: "Trials",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 3);

                findRecursive(store, data.Duty.Trials, result.dict);

                return result;
            },
        },
        {
            title: "The Hunt",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Duty.Hunts, result.dict);

                return result;
            },
        },
    ]
};
