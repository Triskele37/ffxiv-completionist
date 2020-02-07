import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_21_25 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "24",
        name: "Effervescent Water",
        zone: "South Shroud",
        location: "Upper Paths",
        usage: "ALC, WVR",
        special: "",
    }, {
        level: "25",
        name: "Silver Ore",
        zone: "South Shroud",
        location: "Upper Paths",
        usage: "GSM",
        special: "",
    },
];
