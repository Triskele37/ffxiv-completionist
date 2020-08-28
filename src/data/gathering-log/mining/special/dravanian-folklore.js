import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Dravanian_Folklore = function(parent) {
    return new DataGroup("Dravanian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Aurum Regis Ore",
        zone: "The Churning Mists",
        closestAetheryte: "Zenith",
        coordinates: "(x11,y38)",
        nodeTimer: "Legendary (2AM/PM), Unlocked w/ Geological Folklore - Dravania"
    }, {
        level: "60★",
        name: "Lumythrite Ore",
        zone: "The Churning Mists",
        closestAetheryte: "Zenith",
        coordinates: "(x11,y38)",
        nodeTimer: "Legendary (2AM/PM), Unlocked w/ Geological Folklore - Dravania"
    },
];
