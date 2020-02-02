import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Vrandtic_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80★",
        name: "Tungsten Ore",
        zone: "The Tempest",
        location: "Where the Dry Return",
        usage: "BSM, Collectable",
        special: "Legendary (10 AM/PM), Unlocked w/ Geological Folklore - Vrandtic",
    }, {
        level: "80★",
        name: "Prismstone",
        zone: "Il Mheg",
        location: "Saint Fathric's Temple",
        usage: "GSM, Collectable",
        special: "Legendary (4 AM/PM), Unlocked w/ Geological Folklore - Vrandtic",
    }, {
        level: "80★",
        name: "Beryllium Ore",
        zone: "Il Mheg",
        location: "Saint Fathric's Temple",
        usage: "GSM",
        special: "Legendary (4 AM/PM), Unlocked w/ Geological Folklore - Vrandtic",
    },
];
