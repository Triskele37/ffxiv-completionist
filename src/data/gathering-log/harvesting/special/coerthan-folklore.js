import { DataGroup } from "../../../DataGroup";

export const Gathering_Logs_Harvesting_Special_Coerthan_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Dravanian Paprika",
        zone: "Coerthas Western Highlands",
        location: "The Bed of Bones"
    }, {
        level: "60★",
        name: "Vanilla Beans",
        zone: "Coerthas Western Highlands",
        location: "The Watcher"
    }, {
        level: "60★",
        name: "Frost Cotton Boll",
        zone: "Coerthas Western Highlands",
        location: "Gorgagne Holding"
    },
];
