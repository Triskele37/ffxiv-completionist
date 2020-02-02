import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_31_35 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "31",
        name: "Granite",
        zone: "Central Shroud",
        location: "Hopeseed Pond"
    }, {
        level: "31",
        name: "Little Worm",
        zone: "Southern Thanalan",
        location: "Sagolii Desert"
    }, {
        level: "31",
        name: "Raw Garnet",
        zone: "Eastern La Noscea",
        location: "Bloodshore"
    }, {
        level: "32",
        name: "Raw Heliodor",
        zone: "Southern Thanalan",
        location: "Sagolii Desert"
    }, {
        level: "33",
        name: "Raw Goshenite",
        zone: "Eastern La Noscea",
        location: "Bloodshore"
    }, {
        level: "33",
        name: "Raw Peridot",
        zone: "Central Shroud",
        location: "Hopeseed Pond"
    }, {
        level: "34",
        name: "Mythril Ore",
        zone: "Southern Thanalan",
        location: "Sagolii Desert"
    }, {
        level: "34",
        name: "Raw Amethyst",
        zone: "Central Shroud",
        location: "Hopeseed Pond"
    }, {
        level: "35",
        name: "Raw Aquamarine",
        zone: "Eastern La Noscea",
        location: "Bloodshore"
    },
];
