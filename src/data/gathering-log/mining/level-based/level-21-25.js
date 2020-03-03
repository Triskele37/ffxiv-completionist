import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_21_25 = function(parent) {
    return new DataGroup("21-25", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "24",
        name: "Effervescent Water",
        zone: "South Shroud",
        closestAetheryte: "Quarrymill",
        coordinates: "(x15,y19)",
        usage: "ALC, WVR",
        special: ""
    }, {
        level: "25",
        name: "Silver Ore",
        zone: "South Shroud",
        closestAetheryte: "Quarrymill",
        coordinates: "(x15,y19)",
        usage: "GSM",
        special: ""
    },
];
