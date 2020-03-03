import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Vrandtic_Folklore = function(parent) {
    return new DataGroup("Vrandtic Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80★",
        name: "Tungsten Ore",
        zone: "The Tempest",
        closestAetheryte: "The Ondo Cups",
        coordinates: "(x32,y7)",
        usage: "BSM, Collectable",
        special: "Legendary (10AM/PM), Unlocked w/ Geological Folklore - Vrandtic"
    }, {
        level: "80★",
        name: "Prismstone",
        zone: "Il Mheg",
        closestAetheryte: "Wolekdorf",
        coordinates: "(x30,y20)",
        usage: "GSM, Collectable",
        special: "Legendary (4AM/PM), Unlocked w/ Geological Folklore - Vrandtic"
    }, {
        level: "80★",
        name: "Beryllium Ore",
        zone: "Il Mheg",
        closestAetheryte: "Wolekdorf",
        coordinates: "(x30,y20)",
        usage: "GSM",
        special: "Legendary (4AM/PM), Unlocked w/ Geological Folklore - Vrandtic"
    }, {
        level: "80★★",
        name: "Fireheart Cobalt",
        zone: "Lakeland",
        closestAetheryte: "The Ostall Imperative",
        coordinates: "(x4,y33)",
        usage: "BSM",
        special: "Legendary (2AM/PM), Unlocked w/ Geological Folklore - Vrandtic"
    },
];
