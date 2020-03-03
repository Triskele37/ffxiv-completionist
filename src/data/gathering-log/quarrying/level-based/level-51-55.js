import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_51_55 = function(parent) {
    return new DataGroup("51-55", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "51",
        name: "Mythrite Sand",
        zone: "Coerthas Western Highlands",
        closestAetheryte: "Tailfeather -> Coerthas Western Highlands",
        coordinates: "(x16,y12)",
        usage: "ALC, ARM, BSM, GSM, FC Crafting, Provisioning",
        special: ""
    }, {
        level: "52",
        name: "Yellow Quartz",
        zone: "The Churning Mists",
        closestAetheryte: "Moghome",
        coordinates: "(x33,y22)",
        usage: "Collectable",
        special: "Unspoiled (6AM/PM)"
    }, {
        level: "55",
        name: "Green Quartz",
        zone: "The Churning Mists",
        closestAetheryte: "Moghome",
        coordinates: "(x33,y22)",
        usage: "Collectable",
        special: "Unspoiled (6AM/PM)"
    },
];
