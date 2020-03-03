import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Level_51_55 = function(parent) {
    return new DataGroup("51-55", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "51",
        name: "Porcini",
        zone: "The Churning Mists",
        closestAetheryte: "Zenith",
        coordinates: "(x24,y6)",
        usage: "CUL, Collectable",
        special: "Unspoiled (12AM/PM)"
    }, {
        level: "54",
        name: "Dark Chestnut Log",
        zone: "The Dravanian Forelands",
        closestAetheryte: "Tailfeather",
        coordinates: "(x25,y25)",
        usage: "CRP, LTW, FC Crafting, Provisioning",
        special: ""
    }, {
        level: "54",
        name: "Dravanian Mistletoe",
        zone: "The Churning Mists",
        closestAetheryte: "Zenith",
        coordinates: "(x24,y6)",
        usage: "ALC, Collectable",
        special: "Buyable, Unspoiled (12AM/PM)"
    }, {
        level: "55",
        name: "Dark Chestnut",
        zone: "The Dravanian Forelands",
        closestAetheryte: "Tailfeather",
        coordinates: "(x25,y25)",
        usage: "CUL",
        special: ""
    }, {
        level: "55",
        name: "Dark Chestnut Branch",
        zone: "The Dravanian Forelands",
        closestAetheryte: "Tailfeather",
        coordinates: "(x25,y25)",
        usage: "ALC, BSM, CRP, Provisioning",
        special: ""
    },
];
