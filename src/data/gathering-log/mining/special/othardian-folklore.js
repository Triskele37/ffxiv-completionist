import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Othardian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★",
        name: "Palladium Ore",
        zone: "Yanxia",
        location: "Monzen",
        usage: "GSM, Collectable",
        special: "Legendary (4AM/PM), Unlocked w/ Geological Folklore - Othardia",
    }, {
        level: "70★★",
        name: "Nightsteel Ore",
        zone: "The Ruby Sea",
        location: "The Isle of Zekki",
        usage: "ARM, BSM",
        special: "Legendary (6AM/PM), Unlocked w/ Geological Folklore - Othardia",
    }, {
        level: "70★★",
        name: "Silvergrace Ore",
        zone: "The Azim Steppe",
        location: "Nhaama's Retreat",
        usage: "GSM",
        special: "Legendary (8AM/PM), Unlocked w/ Geological Folklore - Othardia",
    }, {
        level: "70★★",
        name: "Hawk's Eye",
        zone: "The Ruby Sea",
        location: "The Isle of Zekki",
        usage: "ALC",
        special: "Legendary (6AM/PM), Unlocked w/ Geological Folklore - Othardia",
    }, {
        level: "70★★",
        name: "Azim Spring Water",
        zone: "The Azim Steppe",
        location: "Nhaama's Retreat",
        usage: "ALC",
        special: "Legendary (8AM/PM), Unlocked w/ Geological Folklore - Othardia",
    },
];
