import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Special_Coerthan_Folklore = function(parent) {
    return new DataGroup("Coerthan Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Violet Quartz",
        zone: "Coerthas Western Highlands",
        closestAetheryte: "Falcon's Nest",
        coordinates: "(x11,y21)",
        usage: "GSM, Collectable",
        special: "Legendary (12AM/PM), Unlocked w/ Geological Folklore - Coerthas"
    }, {
        level: "60★",
        name: "Astral Moraine",
        zone: "Coerthas Western Highlands",
        closestAetheryte: "Falcon's Nest",
        coordinates: "(x37,y16)",
        usage: "ALC, CRP, Collectable",
        special: "Legendary (12AM/PM), Unlocked w/ Geological Folklore - Coerthas"
    },
];
