import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Abalathian_Folklore = function(parent) {
    return new DataGroup("Abalathian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Red Alumen",
        zone: "Azys Lla",
        closestAetheryte: "Helix",
        coordinates: "(x35,y16)",
        usage: "LTW, Collectable",
        special: "Legendary (10AM/PM), Unlocked w/ Geological Folklore - Abalathia's Spine"
    }, {
        level: "60★",
        name: "Smithsonite Ore",
        zone: "The Sea of Clouds",
        closestAetheryte: "Ok'Zundu",
        coordinates: "(x38,y15)",
        usage: "GSM, Collectable",
        special: "Legendary (8AM/PM), Unlocked w/ Geological Folklore - Abalathia's Spine"
    }, {
        level: "60★",
        name: "Meteorite",
        zone: "The Sea of Clouds",
        closestAetheryte: "Ok'Zundu",
        coordinates: "(x38,y15)",
        usage: "ALC, Collectable",
        special: "Legendary (8AM/PM), Unlocked w/ Geological Folklore - Abalathia's Spine"
    }, {
        level: "60★★★",
        name: "Luminium Ore",
        zone: "Azys Lla",
        closestAetheryte: "Helix",
        coordinates: "(x5,y17)",
        usage: "GSM",
        special: "Legendary (6AM/PM), Unlocked w/ Geological Folklore - Abalathia's Spine"
    },
];
