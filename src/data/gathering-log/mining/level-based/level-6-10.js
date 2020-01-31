import { DataGroup } from "../../../DataGroup";

export const Gathering_Logs_Mining_Level_6_10 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "6",
        name: "Tin Ore",
        zone: "Western Thanalan",
        location: "Hammerlea"
    }, {
        level: "7",
        name: "Raw Lapis Lazuli",
        zone: "North Shroud",
        location: "Treespeak"
    }, {
        level: "7",
        name: "Raw Sunstone",
        zone: "Lower La Noscea",
        location: "Cedarwood"
    }, {
        level: "8",
        name: "Soiled Femur",
        zone: "Western Thanalan",
        location: "Hammerlea"
    }, {
        level: "9",
        name: "Zinc Ore",
        zone: "Western Thanalan",
        location: "Hammerlea"
    }, {
        level: "10",
        name: "Obsidian",
        zone: "Western Thanalan",
        location: "Hammerlea"
    }, {
        level: "10",
        name: "Potter's Clay",
        zone: "North Shroud",
        location: "Treespeak"
    },
];
