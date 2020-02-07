import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Special_Gyr_Abanian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★★",
        name: "Hingan Flax",
        zone: "The Peaks",
        location: "Mount Yorn",
        usage: "WVR",
        special: "Unspoiled (2AM/PM), Unlocked w/ Botanical Folklore- Gyr Abanian",
    },
];
