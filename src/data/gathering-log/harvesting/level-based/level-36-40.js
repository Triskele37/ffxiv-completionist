import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Level_36_40 = function(parent) {
    return new DataGroup("36-40", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "36",
        name: "Blood Currants",
        zone: "South Shroud",
        closestAetheryte: "Camp Tranquil",
        coordinates: "(x21,y29)",
        usage: "CUL, Provisioning",
        special: ""
    }, {
        level: "36",
        name: "Blood Currant Seeds",
        zone: "South Shroud",
        closestAetheryte: "Camp Tranquil",
        coordinates: "(x21,y29)",
        usage: "Gardening",
        special: "Hidden"
    }, {
        level: "37",
        name: "Mugwort",
        zone: "Eastern La Noscea",
        closestAetheryte: "Wineport",
        coordinates: "(x21,y29)",
        usage: "ALC, CUL, Provisioning",
        special: ""
    }, {
        level: "38",
        name: "Maiden Artichoke",
        zone: "Eastern La Noscea",
        closestAetheryte: "Wineport",
        coordinates: "(x21,y29)",
        usage: "CUL, Provisioning",
        special: ""
    }, {
        level: "39",
        name: "Ramhorn Zucchini",
        zone: "Eastern La Noscea",
        closestAetheryte: "Wineport",
        coordinates: "(x21,y29)",
        usage: "CUL",
        special: ""
    }, {
        level: "39",
        name: "Thyme",
        zone: "South Shroud",
        closestAetheryte: "Camp Tranquil",
        coordinates: "(x21,y29)",
        usage: "CUL, Provisioning",
        special: ""
    },
];
