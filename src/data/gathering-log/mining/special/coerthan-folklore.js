import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Coerthan_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★★★",
        name: "Tungstite",
        zone: "Coerthas Western Highlands",
        location: "Dragonspit",
        usage: "ARM, BSM",
        special: "Legendary (2AM/PM), Unlocked w/ Geological Folklore - Coertha",
    },
];
