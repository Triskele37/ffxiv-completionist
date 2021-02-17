import { DataGroup } from "../../../../DataGroup";

export const Logs_Gathering_Log_Quarrying_Special_Dravanian_Folklore = function(parent) {
    return new DataGroup("Dravanian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Blue Quartz",
        zone: "The Dravanian Hinterlands",
        closestAetheryte: "Idyllshire -> The Dravanian Hinterlands",
        coordinates: "(x11,y16)",
        nodeTimer: "Legendary (6AM/PM), Unlocked w/ Geological Folklore - Dravania"
    }, {
        level: "60★★★",
        name: "Zeolite Ore",
        zone: "The Dravanian Hinterlands",
        closestAetheryte: "Idyllshire -> The Dravanian Hinterlands",
        coordinates: "(x13,y31)",
        nodeTimer: "Legendary (8AM/PM), Unlocked w/ Geological Folklore - Dravania"
    },
];
