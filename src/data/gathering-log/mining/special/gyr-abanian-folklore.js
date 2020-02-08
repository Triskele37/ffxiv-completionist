import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Gyr_Abanian_Folklore = function(parent) {
    return new DataGroup("Gyr Abanian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★",
        name: "Chromite Ore",
        zone: "The Peaks",
        location: "Wightrock",
        usage: "ARM, BSM, LTW, Collectables",
        special: "Legendary (10AM/PM), Unlocked w/ Geological Folklore - Gyr Abania",
    }, {
        level: "70★",
        name: "Gyr Abanian Spring Water",
        zone: "The Peaks",
        location: "Wightrock",
        usage: "ALC",
        special: "Legendary (10AM/PM), Unlocked w/ Geological Folklore - Gyr Abania",
    }, {
        level: "70★★★",
        name: "Gyr Abanian Ore",
        zone: "The Fringes",
        location: "Virdjala",
        usage: "ARM, BSM",
        special: "Legendary (12AM/PM), Unlocked w/ Geological Folklore - Gyr Abania",
    }, {
        level: "70★★★",
        name: "Evergleam Ore",
        zone: "The Lochs",
        location: "Loch Seld",
        usage: "GSM",
        special: "Legendary (10AM/PM), Unlocked w/ Geological Folklore - Gyr Abania",
    },
];
