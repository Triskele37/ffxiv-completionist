import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Gyr_Abanian_Folklore = function(parent) {
    return new DataGroup("Gyr Abanian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★",
        name: "Chromite Ore",
        zone: "The Peaks",
        closestAetheryte: "Ala Ghiri",
        coordinates: "(x16,y33.9)",
        usage: "ARM, BSM, LTW, Collectables",
        special: "Legendary (10AM/PM), Unlocked w/ Geological Folklore - Gyr Abania"
    }, {
        level: "70★",
        name: "Gyr Abanian Spring Water",
        zone: "The Peaks",
        closestAetheryte: "Ala Ghiri",
        coordinates: "(x16,y33.9)",
        usage: "ALC",
        special: "Legendary (10AM/PM), Unlocked w/ Geological Folklore - Gyr Abania"
    }, {
        level: "70★★★",
        name: "Gyr Abanian Ore",
        zone: "The Fringes",
        closestAetheryte: "The Peering Stones",
        coordinates: "(x31,y27)",
        usage: "ARM, BSM",
        special: "Legendary (12AM/PM), Unlocked w/ Geological Folklore - Gyr Abania"
    }, {
        level: "70★★★",
        name: "Evergleam Ore",
        zone: "The Lochs",
        closestAetheryte: "Porta Praetoria",
        coordinates: "(x22,y13)",
        usage: "GSM",
        special: "Legendary (10AM/PM), Unlocked w/ Geological Folklore - Gyr Abania"
    },
];
