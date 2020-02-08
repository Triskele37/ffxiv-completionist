import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Level_51_55 = function(parent) {
    return new DataGroup("51-55", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "51",
        name: "Porcini",
        zone: "The Churning Mists",
        location: "Easton Eyes",
        usage: "CUL, Collectable",
        special: "Unspoiled (12 AM/PM)",
    }, {
        level: "54",
        name: "Dark Chestnut Log",
        zone: "The Dravanian Forelands",
        location: "The Smoldering Wastes",
        usage: "CRP, LTW, FC Crafting, Provisioning",
        special: "",
    }, {
        level: "54",
        name: "Dravanian Mistletoe",
        zone: "The Churning Mists",
        location: "Easton Eyes",
        usage: "ALC, Collectable",
        special: "Buyable, Unspoiled (12 AM/PM)",
    }, {
        level: "55",
        name: "Dark Chestnut",
        zone: "The Dravanian Forelands",
        location: "The Smoldering Wastes",
        usage: "CUL",
        special: "",
    }, {
        level: "55",
        name: "Dark Chestnut Branch",
        zone: "The Dravanian Forelands",
        location: "The Smoldering Wastes",
        usage: "ALC, BSM, CRP, Provisioning",
        special: "",
    },
];
