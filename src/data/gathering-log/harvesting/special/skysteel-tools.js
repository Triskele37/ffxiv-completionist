import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Special_Skysteel_Tools = function(parent) {
    return new DataGroup("Skysteel Tools", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80★",
        name: "Oddly Specific Latex",
        zone: "The Sea of Clouds",
        closestTeleport: "Camp Cloudtop",
        coordinates: "(x29, y23)",
        nodeTimer: ""
    },
    {
        level: "80★",
        name: "Oddly Specific Fossil Dust",
        zone: "The Sea of Clouds",
        closestTeleport: "Camp Cloudtop",
        coordinates: "(x29, y23)",
        nodeTimer: ""
    },
    {
        level: "80★★",
        name: "Oddly Specific Amber",
        zone: "Coerthas Western Highlands",
        closestTeleport: "Tailfeather -> Coerthas Western Highlands",
        coordinates: "(x10, y18)",
        nodeTimer: ""
    },
    {
        level: "80★★",
        name: "Oddly Specific Bauble",
        zone: "Coerthas Western Highlands",
        closestTeleport: "Tailfeather -> Coerthas Western Highlands",
        coordinates: "(x10, y18)",
        nodeTimer: ""
    },
];
