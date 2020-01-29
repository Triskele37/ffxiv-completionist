import { data } from '../../../../data';
import { generateImportObj, findRecursive } from './utils';

export const CraftingLogSection = {
    name: "Crafting Logs",
    tabs: [
        {
            title: "Carpentry Log",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.CraftingLogs.Carpenter, result.dict);

                return result;
            },
        },
        {
            title: "Blacksmithing Log",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.CraftingLogs.Blacksmith, result.dict);

                return result;
            },
        },
        {
            title: "Armorcrafting Log",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.CraftingLogs.Armorer, result.dict);

                return result;
            },
        },
        {
            title: "Goldsmithing Log",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.CraftingLogs.Goldsmith, result.dict);

                return result;
            },
        },
        {
            title: "Leatherworking Log",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.CraftingLogs.Leatherworker, result.dict);

                return result;
            },
        },
        {
            title: "Weaving Log",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.CraftingLogs.Weaver, result.dict);

                return result;
            },
        },
        {
            title: "Alchemy Log",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.CraftingLogs.Alchemist, result.dict);

                return result;
            },
        },
        {
            title: "Culinary Log",
            importCallback: (store, rawText) => {
                const result = generateImportObj(rawText, 2);

                findRecursive(store, data.CraftingLogs.Culinarian, result.dict);

                return result;
            },
        },
        {
            title: "Shared Craft Log",
            importCallback: (store, rawText) => {
                return 'Not Yet Implemented';
            },
        },
    ]
};
