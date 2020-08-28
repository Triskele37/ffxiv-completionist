import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_41_45 = function(parent) {
    return new DataGroup("41-45", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "41",
        name: "Raw Turquoise",
        zone: "Upper La Noscea",
        closestAetheryte: "Camp Bronze Lake",
        coordinates: "(x30,y25)",
        nodeTimer: ""
    }, {
        level: "43",
        name: "Electrum Ore",
        zone: "Upper La Noscea",
        closestAetheryte: "Camp Bronze Lake",
        coordinates: "(x30,y25)",
        nodeTimer: ""
    }, {
        level: "44",
        name: "Raw Amber",
        zone: "Eastern Thanalan",
        closestAetheryte: "Camp Drybone",
        coordinates: "(x12,y19)",
        nodeTimer: ""
    }, {
        level: "45",
        name: "Raw Rubellite",
        zone: "Eastern Thanalan",
        closestAetheryte: "Camp Drybone",
        coordinates: "(x12,y19)",
        nodeTimer: ""
    },
];
