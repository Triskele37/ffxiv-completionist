import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Special_Ishgard_Restoration = function(parent) {
    return new DataGroup("Ishgard Restoration", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "5",
        name: "Skybuilders' Yew Log",
        zone: "East Shroud",
        closestAetheryte: "The Hawthorne Hut",
        coordinates: "(x12,y23)",
        usage: "Ishgard Restoration",
        special: ""
    }, {
        level: "35",
        name: "Skybuilders' Ash Log",
        zone: "Central Shroud",
        closestAetheryte: "Brentbranch Meadows",
        coordinates: "(x14,y18)",
        usage: "Ishgard Restoration",
        special: ""
    }, {
        level: "60",
        name: "Skybuilders' Camphorwood Log",
        zone: "The Churning Mists",
        closestAetheryte: "Zenith",
        coordinates: "(x11,y19)",
        usage: "Ishgard Restoration",
        special: ""
    }, {
        level: "65",
        name: "Skybuilders' Urunday Log",
        zone: "The Peaks",
        closestAetheryte: "Ala Gannha",
        coordinates: "(x7,y13)",
        usage: "Ishgard Restoration",
        special: ""
    }, {
        level: "80",
        name: "Skybuilders' White Ash Log",
        zone: "The Rak'tika Greatwood",
        closestAetheryte: "Fanow",
        coordinates: "(x31,y22)",
        usage: "Ishgard Restoration",
        special: ""
    }, {
        level: "80",
        name: "Skybuilders' Resin",
        zone: "The Rak'tika Greatwood",
        closestAetheryte: "Fanow",
        coordinates: "(x31,y22)",
        usage: "Ishgard Restoration",
        special: ""
    },
];
