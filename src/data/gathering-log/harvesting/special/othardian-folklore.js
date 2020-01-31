import { DataGroup } from "../../../DataGroup";

export const Gathering_Logs_Harvesting_Special_Othardian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★",
        name: "Rhea",
        zone: "The Azim Steppe",
        location: "Ceol Aen"
    }, {
        level: "70★",
        name: "Azim Cotton Ball",
        zone: "The Azim Steppe",
        location: "Ceol Aen"
    }, {
        level: "70★★★",
        name: "Yanxian Cotton Boll",
        zone: "Yanxia",
        location: "Castrum Flumins"
    },
];
