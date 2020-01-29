import { data } from '../../../../data';
import { generateImportObj, findAndSetFlags, findRecursive } from './utils';

export const GeneralLogSection = {
    name: "General Logs",
    tabs: [
        {
            title: "Blue Mage Spellbook",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findAndSetFlags(store, data.Logs.BlueMage.Spellbook, result.dict);

                return result;
            },
        },
        {
            title: "Blue Mage Log",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 3);

                findRecursive(store, data.Logs.BlueMage.Log, result.dict);

                return result;
            },
        },
        {
            title: "The Masked Carnivale",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findAndSetFlags(store, data.Logs.BlueMage.TheMaskedCarnivale, result.dict);

                return result;
            },
        },
        {
            title: "Hunting Logs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 1);

                findRecursive(store, data.Logs.Hunting, result.dict);

                return result;
            },
        },
        {
            title: "Sightseeing Logs",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.Logs.Sightseeing, result.dict);

                return result;
            },
        },
    ]
};
