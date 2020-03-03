import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_1_5 = function(parent) {
    return new DataGroup("1-5", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Fire Shard",
        zone: "Middle La Noscea",
        closestAetheryte: "Swiftperch -> Middle La Noscea",
        coordinates: "(x15,y10)",
        usage: "Catalyst",
        special: ""
    }, {
        level: "1",
        name: "Ice Shard",
        zone: "Western La Noscea",
        closestAetheryte: "Aleport",
        coordinates: "(x26,y24)",
        usage: "Catalyst",
        special: ""
    }, {
        level: "1",
        name: "Wind Shard",
        zone: "East Shroud",
        closestAetheryte: "The Hawthorne Hut",
        coordinates: "(x20,y27)",
        usage: "Catalyst",
        special: ""
    }, {
        level: "1",
        name: "Earth Shard",
        zone: "Upper La Noscea",
        closestAetheryte: "Aleport -> Upper La Noscea",
        coordinates: "(x12,y23)",
        usage: "Catalyst",
        special: ""
    }, {
        level: "1",
        name: "Lightning Shard",
        zone: "Central Thanalan",
        closestAetheryte: "Black Brush Station",
        coordinates: "(x14,y23)",
        usage: "Catalyst",
        special: ""
    }, {
        level: "1",
        name: "Water Shard",
        zone: "Western Thanalan",
        closestAetheryte: "Horizon",
        coordinates: "(x24,y18)",
        usage: "Catalyst",
        special: ""
    },
];
