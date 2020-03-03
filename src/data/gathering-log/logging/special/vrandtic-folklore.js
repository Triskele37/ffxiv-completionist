import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Special_Vrandtic_Folklore = function(parent) {
    return new DataGroup("Vrandtic Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80★",
        name: "Sandalwood Log",
        zone: "The Rak'tika Greatwood",
        closestAetheryte: "Slitherbough",
        coordinates: "(x24,y36)",
        usage: "CRP, Collectable",
        special: "Legendary (2AM/PM), Unlocked w/ Botanical Folklore - Vrandtic"
    }, {
        level: "80★",
        name: "Sandalwood Sap",
        zone: "The Rak'tika Greatwood",
        closestAetheryte: "Slitherbough",
        coordinates: "(x24,y36)",
        usage: "ALC",
        special: "Legendary (2AM/PM), Unlocked w/ Botanical Folklore - Vrandtic"
    }, {
        level: "80★★",
        name: "Merbau Log",
        zone: "Il Mheg",
        closestAetheryte: "Wolekdorf",
        coordinates: "(x36,y27)",
        usage: "CRP",
        special: "Legendary (8AM/PM), Unlocked w/ Botanical Folklore - Vrandtic"
    },
];
