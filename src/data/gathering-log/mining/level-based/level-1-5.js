import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_1_5 = function(parent) {
    return new DataGroup("1-5", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Copper Ore",
        zone: "Western Thanalan",
        closestAetheryte: "Ul'Dah -> Gate of the Sultana",
        coordinates: "(x26,y25)",
        nodeTimer: ""
    }, {
        level: "1",
        name: "Fire Shard",
        zone: "Western Thanalan",
        closestAetheryte: "Ul'Dah -> Gate of the Sultana",
        coordinates: "(x26,y25)",
        nodeTimer: ""
    }, {
        level: "1",
        name: "Ice Shard",
        zone: "Western La Noscea",
        closestAetheryte: "Aleport",
        coordinates: "(x29,y22)",
        nodeTimer: ""
    }, {
        level: "1",
        name: "Wind Shard",
        zone: "Central Thanalan",
        closestAetheryte: "Black Brush Station",
        coordinates: "(x24,y26)",
        nodeTimer: ""
    }, {
        level: "1",
        name: "Earth Shard",
        zone: "Lower La Noscea",
        closestAetheryte: "Limsa Lominsa -> Tempest Gate",
        coordinates: "(x27,y18)",
        nodeTimer: ""
    }, {
        level: "1",
        name: "Lightning Shard",
        zone: "Central Thanalan",
        closestAetheryte: "Black Brush Station",
        coordinates: "(x24,y26)",
        nodeTimer: ""
    }, {
        level: "1",
        name: "Water Shard",
        zone: "Western Thanalan",
        closestAetheryte: "Ul'Dah -> Gate of the Sultana",
        coordinates: "(x26,y25)",
        nodeTimer: ""
    }, {
        level: "3",
        name: "Muddy Water",
        zone: "Western Thanalan",
        closestAetheryte: "Ul'Dah -> Gate of the Sultana",
        coordinates: "(x26,y25)",
        nodeTimer: ""
    }, {
        level: "5",
        name: "Bone Chip",
        zone: "Central Thanalan",
        closestAetheryte: "Black Brush Station",
        coordinates: "(x24,y26)",
        nodeTimer: ""
    },
];
