import { data } from '../../../../data';
import { importCallback } from './utils';

export const CraftingLogSection = {
    name: "Crafting Logs",
    tabs: [
        {
            title: "Carpentry Log",
            importCallback: importCallback(2, [data.Crafting_Log.Carpenter]),
        },
        {
            title: "Blacksmithing Log",
            importCallback: importCallback(2, [data.Crafting_Log.Blacksmith]),
        },
        {
            title: "Armorcrafting Log",
            importCallback: importCallback(2, [data.Crafting_Log.Armorer]),
        },
        {
            title: "Goldsmithing Log",
            importCallback: importCallback(2, [data.Crafting_Log.Goldsmith]),
        },
        {
            title: "Leatherworking Log",
            importCallback: importCallback(2, [data.Crafting_Log.Leatherworker]),
        },
        {
            title: "Weaving Log",
            importCallback: importCallback(2, [data.Crafting_Log.Weaver]),
        },
        {
            title: "Alchemy Log",
            importCallback: importCallback(2, [data.Crafting_Log.Alchemist]),
        },
        {
            title: "Culinary Log",
            importCallback: importCallback(2, [data.Crafting_Log.Culinarian]),
        },
        {
            title: "Shared Craft Log",
            importCallback: (rawText) => {
                return 'Not Yet Implemented';
            },
        },
    ]
};
