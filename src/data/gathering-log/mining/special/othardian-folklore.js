import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Othardian_Folklore = function(parent) {
    return new DataGroup("Othardian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★",
        name: "Palladium Ore",
        zone: "Yanxia",
        closestAetheryte: "The House of the Fierce",
        coordinates: "(x20.5,y10.4)",
        usage: "GSM, Collectable",
        special: "Legendary (4AM/PM), Unlocked w/ Geological Folklore - Othardia"
    }, {
        level: "70★★",
        name: "Nightsteel Ore",
        zone: "The Ruby Sea",
        closestAetheryte: "Tamamizu",
        coordinates: "(x11,y23)",
        usage: "ARM, BSM",
        special: "Legendary (6AM/PM), Unlocked w/ Geological Folklore - Othardia"
    }, {
        level: "70★★",
        name: "Silvergrace Ore",
        zone: "The Azim Steppe",
        closestAetheryte: "Reunion",
        coordinates: "(x23,y36)",
        usage: "GSM",
        special: "Legendary (8AM/PM), Unlocked w/ Geological Folklore - Othardia"
    }, {
        level: "70★★",
        name: "Hawk's Eye",
        zone: "The Ruby Sea",
        closestAetheryte: "Tamamizu",
        coordinates: "(x11,y23)",
        usage: "ALC",
        special: "Legendary (6AM/PM), Unlocked w/ Geological Folklore - Othardia"
    }, {
        level: "70★★",
        name: "Azim Spring Water",
        zone: "The Azim Steppe",
        closestAetheryte: "Reunion",
        coordinates: "(x23,y36)",
        usage: "ALC",
        special: "Legendary (8AM/PM), Unlocked w/ Geological Folklore - Othardia"
    },
];
