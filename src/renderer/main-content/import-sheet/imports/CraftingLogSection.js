import { data } from '../../../../data';
import { importCallback } from './utils';

export const CraftingLogSection = {
    name: "Crafting Logs",
    tabs: [
        {
            title: "Carpentry Log",
            importCallback: importCallback(2, [data.CraftingLogs.Carpenter]),
        },
        {
            title: "Blacksmithing Log",
            importCallback: importCallback(2, [data.CraftingLogs.Blacksmith]),
        },
        {
            title: "Armorcrafting Log",
            importCallback: importCallback(2, [data.CraftingLogs.Armorer]),
        },
        {
            title: "Goldsmithing Log",
            importCallback: importCallback(2, [data.CraftingLogs.Goldsmith]),
        },
        {
            title: "Leatherworking Log",
            importCallback: importCallback(2, [data.CraftingLogs.Leatherworker]),
        },
        {
            title: "Weaving Log",
            importCallback: importCallback(2, [data.CraftingLogs.Weaver]),
        },
        {
            title: "Alchemy Log",
            importCallback: importCallback(2, [data.CraftingLogs.Alchemist]),
        },
        {
            title: "Culinary Log",
            importCallback: importCallback(2, [data.CraftingLogs.Culinarian]),
        },
        {
            title: "Shared Craft Log",
            importCallback: (rawText) => {
                return 'Not Yet Implemented';
            },
        },
    ]
};
