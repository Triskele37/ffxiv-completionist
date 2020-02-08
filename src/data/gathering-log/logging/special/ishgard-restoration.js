import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Special_Ishgard_Restoration = function(parent) {
    return new DataGroup("Ishgard Restoration", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "5",
        name: "Skybuilders' Yew Log",
        zone: "East Shroud",
        location: "The Honey Yard",
        usage: "Ishgard Restoration",
        special: "Buyable",
    }, {
        level: "35",
        name: "Skybuilders' Ash Log",
        zone: "Central Shroud",
        location: "Sorrel Haven",
        usage: "Ishgard Restoration",
        special: "Buyable",
    }, {
        level: "60",
        name: "Skybuilders' Camphorwood Log",
        zone: "The Churning Mists",
        location: "Gron Rhei",
        usage: "Ishgard Restoration",
        special: "Buyable",
    }, {
        level: "65",
        name: "Skybuilders' Urunday Log",
        zone: "The Peaks",
        location: "Gyrmm & Enid",
        usage: "Ishgard Restoration",
        special: "Buyable",
    }, {
        level: "80",
        name: "Skybuilders' White Ash Log",
        zone: "The Rak'tika Greatwood",
        location: "Bowrest",
        usage: "Ishgard Restoration",
        special: "Buyable",
    }, {
        level: "80",
        name: "Skybuilders' Resin",
        zone: "The Rak'tika Greatwood",
        location: "Bowrest",
        usage: "Ishgard Restoration",
        special: "Buyable",
    },
];
