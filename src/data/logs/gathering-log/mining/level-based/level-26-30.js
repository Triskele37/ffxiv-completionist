import { DataGroup } from "../../../../DataGroup";

export const Logs_Gathering_Log_Mining_Level_26_30 = function(parent) {
    return new DataGroup("26-30", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "26",
        name: "Fire Crystal",
        zone: "The Dravanian Forelands",
        closestAetheryte: "Tailfeather",
        coordinates: "(x20,y26)",
        nodeTimer: ""
    }, {
        level: "26",
        name: "Ice Crystal",
        zone: "Coerthas Western Highlands",
        closestAetheryte: "Falcon's Nest",
        coordinates: "(x28,y27)",
        nodeTimer: ""
    }, {
        level: "26",
        name: "Wind Crystal",
        zone: "The Dravanian Hinterlands",
        closestAetheryte: "Idyllshire -> The Dravanian Hinterlands",
        coordinates: "(x27,y24)",
        nodeTimer: ""
    }, {
        level: "26",
        name: "Earth Crystal",
        zone: "The Peaks",
        closestAetheryte: "Ala Gannha",
        coordinates: "(x35,y10)",
        nodeTimer: ""
    }, {
        level: "26",
        name: "Lightning Crystal",
        zone: "The Sea of Clouds",
        closestAetheryte: "Camp Cloudtop",
        coordinates: "(x33,y31)",
        nodeTimer: ""
    }, {
        level: "26",
        name: "Water Crystal",
        zone: "The Sea of Clouds",
        closestAetheryte: "Camp Cloudtop",
        coordinates: "(x33,y31)",
        nodeTimer: ""
    }, {
        level: "28",
        name: "Wyvern Obsidian",
        zone: "Eastern Thanalan",
        closestAetheryte: "Camp Drybone",
        coordinates: "(x26,y17)",
        nodeTimer: ""
    }, {
        level: "30",
        name: "Saltpeter",
        zone: "Eastern Thanalan",
        closestAetheryte: "Camp Drybone",
        coordinates: "(x26,y17)",
        nodeTimer: ""
    },
];
