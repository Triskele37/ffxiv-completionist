import { DataGroup } from "../../../../DataGroup";

export const Logs_Gathering_Log_Mining_Level_6_10 = function(parent) {
    return new DataGroup("6-10", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "6",
        name: "Tin Ore",
        zone: "Western Thanalan",
        closestAetheryte: "Ul'Dah -> Gate of the Sultana",
        coordinates: "(x22,y28)",
        nodeTimer: ""
    }, {
        level: "7",
        name: "Raw Sunstone",
        zone: "Lower La Noscea",
        closestAetheryte: "Limsa Lominsa -> Tempest Gate",
        coordinates: "(x27,y18)",
        nodeTimer: ""
    }, {
        level: "7",
        name: "Raw Lapis Lazuli",
        zone: "North Shroud",
        closestAetheryte: "Fallgourd Float",
        coordinates: "(x28,y25)",
        nodeTimer: ""
    }, {
        level: "8",
        name: "Soiled Femur",
        zone: "Western Thanalan",
        closestAetheryte: "Ul'Dah -> Gate of the Sultana",
        coordinates: "(x22,y28)",
        nodeTimer: ""
    }, {
        level: "9",
        name: "Zinc Ore",
        zone: "Western Thanalan",
        closestAetheryte: "Ul'Dah -> Gate of the Sultana",
        coordinates: "(x22,y28)",
        nodeTimer: ""
    }, {
        level: "10",
        name: "Obsidian",
        zone: "Western Thanalan",
        closestAetheryte: "Ul'Dah -> Gate of the Sultana",
        coordinates: "(x22,y28)",
        nodeTimer: ""
    }, {
        level: "10",
        name: "Potter's Clay",
        zone: "North Shroud",
        closestAetheryte: "Fallgourd Float",
        coordinates: "(x28,y25)",
        nodeTimer: ""
    },
];
