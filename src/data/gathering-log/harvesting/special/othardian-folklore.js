import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Special_Othardian_Folklore = function(parent) {
    return new DataGroup("Othardian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★",
        name: "Rhea",
        zone: "The Azim Steppe",
        closestAetheryte: "The Dawn Throne",
        coordinates: "(x20,y8)",
        nodeTimer: "Legendary (12AM/PM), Unlocked w/ Botanical Folklore- Othardian"
    }, {
        level: "70★",
        name: "Azim Cotton Ball",
        zone: "The Azim Steppe",
        closestAetheryte: "The Dawn Throne",
        coordinates: "(x20,y8)",
        nodeTimer: "Legendary (12AM/PM), Unlocked w/ Botanical Folklore- Othardian"
    }, {
        level: "70★★★",
        name: "Yanxian Cotton Boll",
        zone: "Yanxia",
        closestAetheryte: "Namai",
        coordinates: "(x28,y35)",
        nodeTimer: "Unspoiled (2AM/PM), Unlocked w/ Botanical Folklore- Othard"
    },
];
