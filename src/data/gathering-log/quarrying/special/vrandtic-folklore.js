import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Special_Vrandtic_Folklore = function(parent) {
    return new DataGroup("Vrandtic Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80★★",
        name: "Purpure Shell Chip",
        zone: "The Tempest",
        closestAetheryte: "Macarenses Angle",
        coordinates: "(x34,y31)",
        nodeTimer: "Legendary (6AM/PM), Unlocked w/ Geological Folklore - Vrandtic"
    }, {
        level: "80★★",
        name: "Ashen Alumen",
        zone: "Amh Araeng",
        closestAetheryte: "Twine",
        coordinates: "(x20,y8)",
        nodeTimer: "Legendary (10AM/PM), Unlocked w/ Geological Folklore - Vrandtic"
    },
];
