import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Special_Gyr_Abanian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★",
        name: "Torreya Log",
        zone: "The Lochs",
        location: "Stacks",
        usage: "CRP, Collectable",
        special: "Legendary (6AM/PM), Unlocked w/ Botanical Folklore - Gyr Abanian",
    }, {
        level: "70★★",
        name: "Black Willow Log",
        zone: "The Fringes",
        location: "Pike Falls",
        usage: "CRP",
        special: "Legendary (4AM/PM), Unlocked w/ Botanical Folklore - Gyr Abanian",
    }, {
        level: "70★★",
        name: "Hardened Veteran Tree Sap",
        zone: "The Fringer",
        location: "Pike Falls",
        usage: "ALC",
        special: "Legendary (4AM/PM), Unlocked w/ Botanical Folklore - Gyr Abanian",
    }, {
        level: "70★★★",
        name: "Urunday Log",
        zone: "The Peaks",
        location: "Sleeping Stones",
        usage: "CRP",
        special: "Legendary (4AM/PM), Unlocked w/ Botanical Folklore - Gyr Abanian",
    },
];
