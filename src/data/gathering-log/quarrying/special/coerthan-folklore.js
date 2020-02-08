import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Special_Coerthan_Folklore = function(parent) {
    return new DataGroup("Coerthan Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Violet Quartz",
        zone: "Coerthas Western Highlands",
        location: "The Convictory",
        usage: "GSM, Collectable",
        special: "Legendary (7 AM), Unlocked w/ Geological Folklore - Coerthas",
    }, {
        level: "60★",
        name: "Astral Moraine",
        zone: "Coerthas Western Highlands",
        location: "Hemlock",
        usage: "ALC, CRP, Collectable",
        special: "Legendary (5 AM), Unlocked w/ Geological Folklore - Coerthas",
    },
];
