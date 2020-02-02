import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_51_55 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "51",
        name: "Mythrite Sand",
        zone: "Coerthas Western Highlands",
        location: "Twinpools"
    }, {
        level: "52",
        name: "Yellow Quartz",
        zone: "The Churning Mists",
        location: "The House of Letters"
    }, {
        level: "55",
        name: "Green Quartz",
        zone: "The Churning Mists",
        location: "The House of Letters"
    },
];
