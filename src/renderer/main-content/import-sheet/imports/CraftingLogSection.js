import { data } from '../../../../data';
import { importCallback } from './utils';

export const CraftingLogSection = {
    name: "Crafting Logs",
    tabs: [
        {
            title: "Carpentry Log",
            importCallback: importCallback(2, [data.Crafting_Logs.Carpenter]),
        },
        {
            title: "Blacksmithing Log",
            importCallback: importCallback(2, [data.Crafting_Logs.Blacksmith]),
        },
        {
            title: "Armorcrafting Log",
            importCallback: importCallback(2, [data.Crafting_Logs.Armorer]),
        },
        {
            title: "Goldsmithing Log",
            importCallback: importCallback(2, [data.Crafting_Logs.Goldsmith]),
        },
        {
            title: "Leatherworking Log",
            importCallback: importCallback(2, [data.Crafting_Logs.Leatherworker]),
        },
        {
            title: "Weaving Log",
            importCallback: importCallback(2, [data.Crafting_Logs.Weaver]),
        },
        {
            title: "Alchemy Log",
            importCallback: importCallback(2, [data.Crafting_Logs.Alchemist]),
        },
        {
            title: "Culinary Log",
            importCallback: importCallback(2, [data.Crafting_Logs.Culinarian]),
        },
        {
            title: "Shared Craft Log",
            importCallback: (rawText) => {
                return 'Not Yet Implemented';
            },
        },
    ]
};
