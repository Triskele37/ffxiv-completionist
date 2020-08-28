import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_16_20 = function(parent) {
    return new DataGroup("16-20", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "16",
        name: "Raw Malachite",
        zone: "Eastern Thanalan",
        closestAetheryte: "Camp Drybone",
        coordinates: "(x17,y20)",
        nodeTimer: ""
    }, {
        level: "17",
        name: "Raw Sphene",
        zone: "North Shroud",
        closestAetheryte: "Fallgourd Float",
        coordinates: "(x29,y22)",
        nodeTimer: ""
    }, {
        level: "17",
        name: "Raw Fluorite",
        zone: "Eastern Thanalan",
        closestAetheryte: "Camp Drybone",
        coordinates: "(x17,y20)",
        nodeTimer: ""
    }, {
        level: "18",
        name: "Raw Danburite",
        zone: "Western La Noscea",
        closestAetheryte: "Aleport",
        coordinates: "(x29,y22)",
        nodeTimer: ""
    }, {
        level: "19",
        name: "Sunrise Tellin",
        zone: "Western La Noscea",
        closestAetheryte: "Aleport",
        coordinates: "(x29,y22)",
        nodeTimer: ""
    }, {
        level: "19",
        name: "Alumen",
        zone: "Eastern Thanalan",
        closestAetheryte: "Camp Drybone",
        coordinates: "(x17,y20)",
        nodeTimer: ""
    },
];
