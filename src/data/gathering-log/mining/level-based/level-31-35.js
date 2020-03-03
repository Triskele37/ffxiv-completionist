import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_31_35 = function(parent) {
    return new DataGroup("31-35", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "31",
        name: "Raw Garnet",
        zone: "Eastern La Noscea",
        closestAetheryte: "Costa del Sol",
        coordinates: "(x28,y27)",
        usage: "ALC, CRP, GSM, Provisioning",
        special: ""
    }, {
        level: "31",
        name: "Granite",
        zone: "Central Shroud",
        closestAetheryte: "Brentbranch Meados",
        coordinates: "(x14,y21)",
        usage: "CRP, GSM, FC Crafting",
        special: ""
    }, {
        level: "31",
        name: "Little Worm",
        zone: "Southern Thanalan",
        closestAetheryte: "Forgotten Springs",
        coordinates: "(x25,y41)",
        usage: "CUL",
        special: "Hidden"
    }, {
        level: "32",
        name: "Raw Heliodor",
        zone: "Southern Thanalan",
        closestAetheryte: "Forgotten Springs",
        coordinates: "(x25,y41)",
        usage: "ALC, GSM, Provisioning",
        special: ""
    }, {
        level: "33",
        name: "Raw Goshenite",
        zone: "Eastern La Noscea",
        closestAetheryte: "Costa del Sol",
        coordinates: "(x28,y27)",
        usage: "ALC, GSM, Provisioning",
        special: ""
    }, {
        level: "33",
        name: "Raw Peridot",
        zone: "Central Shroud",
        closestAetheryte: "Brentbranch Meados",
        coordinates: "(x14,y21)",
        usage: "ALC, GSM, Provisioning",
        special: ""
    }, {
        level: "34",
        name: "Mythril Ore",
        zone: "Southern Thanalan",
        closestAetheryte: "Forgotten Springs",
        coordinates: "(x25,y41)",
        usage: "ARM, BSM, GSM, Provisioning",
        special: ""
    }, {
        level: "34",
        name: "Raw Amethyst",
        zone: "Central Shroud",
        closestAetheryte: "Brentbranch Meados",
        coordinates: "(x14,y21)",
        usage: "ALC, GSM",
        special: ""
    }, {
        level: "35",
        name: "Raw Aquamarine",
        zone: "Eastern La Noscea",
        closestAetheryte: "Costa del Sol",
        coordinates: "(x28,y27)",
        usage: "ALC, GSM, Provisioning",
        special: ""
    },
];
