import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Special_Othardian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★",
        name: "Rhea",
        zone: "The Azim Steppe",
        location: "Ceol Aen",
        usage: "WVR, Collectable",
        special: "Legendary (12AM/PM), Unlocked w/ Botanical Folklore- Othardian",
    }, {
        level: "70★",
        name: "Azim Cotton Ball",
        zone: "The Azim Steppe",
        location: "Ceol Aen",
        usage: "ALC",
        special: "Legendary (12AM/PM), Unlocked w/ Botanical Folklore- Othardian",
    }, {
        level: "70★★★",
        name: "Yanxian Cotton Boll",
        zone: "Yanxia",
        location: "Castrum Flumins",
        usage: "WVR",
        special: "Unspoiled (2AM/PM), Unlocked w/ Botanical Folklore- Othard",
    },
];
