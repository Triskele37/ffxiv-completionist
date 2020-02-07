import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_51_55 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "51",
        name: "Mythrite Sand",
        zone: "Coerthas Western Highlands",
        location: "Twinpools",
        usage: "ALC, ARM, BSM, GSM, FC Crafting, Provisioning",
        special: "",
    }, {
        level: "52",
        name: "Yellow Quartz",
        zone: "The Churning Mists",
        location: "The House of Letters",
        usage: "Collectable",
        special: "Unspoiled (2 AM/PM)",
    }, {
        level: "55",
        name: "Green Quartz",
        zone: "The Churning Mists",
        location: "The House of Letters",
        usage: "Collectable",
        special: "Unspoiled (2 AM/PM)",
    },
];
