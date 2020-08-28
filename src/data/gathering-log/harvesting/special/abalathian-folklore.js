import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Special_Abalathian_Folklore = function(parent) {
    return new DataGroup("Abalathian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★★★",
        name: "Star Cotton Boll",
        zone: "Azys Lla",
        closestAetheryte: "Helix",
        coordinates: "(x9,y31)",
        nodeTimer: "Legendary(4AM/PM), Unlocked w/ Botanical Folklore- Abalathian"
    },
];
