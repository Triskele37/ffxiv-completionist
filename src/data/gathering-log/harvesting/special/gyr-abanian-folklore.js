import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Special_Gyr_Abanian_Folklore = function(parent) {
    return new DataGroup("Gyr Abanian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★★",
        name: "Hingan Flax",
        zone: "The Peaks",
        closestAetheryte: "Ala Ghiri",
        coordinates: "(x24,y36)",
        nodeTimer: "Unspoiled (2AM/PM), Unlocked w/ Botanical Folklore- Gyr Abanian"
    },
];
