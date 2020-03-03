import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Level_16_20 = function(parent) {
    return new DataGroup("16-20", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "16",
        name: "Paprika",
        zone: "Western La Noscea",
        closestAetheryte: "Swiftperch",
        coordinates: "(x31,y28)",
        usage: "CUL, Provisioning",
        special: "Buyable"
    }, {
        level: "16",
        name: "Galago Mint",
        zone: "East Shroud",
        closestAetheryte: "The Hawthorne Hut",
        coordinates: "(x18,y28)",
        usage: "CUL, Provisioning",
        special: "Buyable"
    }, {
        level: "16",
        name: "Paprika Seeds",
        zone: "Western La Noscea",
        closestAetheryte: "Swiftperch",
        coordinates: "(x31,y28)",
        usage: "Gardening",
        special: "Hidden"
    }, {
        level: "17",
        name: "Lalafellin Lentil",
        zone: "Western La Noscea",
        closestAetheryte: "Swiftperch",
        coordinates: "(x31,y28)",
        usage: "CUL, Provisioning",
        special: ""
    }, {
        level: "18",
        name: "Popoto",
        zone: "Eastern Thanalan",
        closestAetheryte: "Camp Drybone",
        coordinates: "(x16,y27)",
        usage: "CUL, Provisioning",
        special: ""
    }, {
        level: "18",
        name: "Belladonna",
        zone: "East Shroud",
        closestAetheryte: "The Hawthorne Hut",
        coordinates: "(x18,y28)",
        usage: "ALC, Provisioning",
        special: ""
    }, {
        level: "18",
        name: "Popoto Set",
        zone: "Eastern Thanalan",
        closestAetheryte: "Camp Drybone",
        coordinates: "(x16,y27)",
        usage: "Gardening",
        special: "Hidden"
    }, {
        level: "19",
        name: "Gil Bun",
        zone: "East Shroud",
        closestAetheryte: "The Hawthorne Hut",
        coordinates: "(x18,y28)",
        usage: "ALC, CUL, Provisioning",
        special: ""
    }, {
        level: "20",
        name: "Island Seedling",
        zone: "Western La Noscea",
        closestAetheryte: "Swiftperch",
        coordinates: "(x31,y28)",
        usage: "ALC, CRP, FC Crafting",
        special: ""
    }, {
        level: "20",
        name: "Shroud Seedling",
        zone: "East Shroud",
        closestAetheryte: "The Hawthorne Hut",
        coordinates: "(x18,y28)",
        usage: "ALC, GSM, FC Crafting",
        special: ""
    }, {
        level: "20",
        name: "Desert Seedling",
        zone: "Eastern Thanalan",
        closestAetheryte: "Camp Drybone",
        coordinates: "(x16,y27)",
        usage: "ALC, GSM",
        special: ""
    }, {
        level: "20",
        name: "White Scorpion",
        zone: "Eastern Thanalan",
        closestAetheryte: "Camp Drybone",
        coordinates: "(x16,y27)",
        usage: "ALC, Provisioning",
        special: ""
    },
];
