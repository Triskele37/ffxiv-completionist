import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_6_10 = function(parent) {
    return new DataGroup("6-10", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "6",
        name: "Tin Ore",
        zone: "Western Thanalan",
        location: "Hammerlea",
        usage: "ARM, BSM, Provisioning",
        special: "Buyable",
    }, {
        level: "7",
        name: "Raw Sunstone",
        zone: "Lower La Noscea",
        location: "Cedarwood",
        usage: "GSM",
        special: "Buyable",
    }, {
        level: "7",
        name: "Raw Lapis Lazuli",
        zone: "North Shroud",
        location: "Treespeak",
        usage: "GSM, Provisioning",
        special: "Buyable",
    }, {
        level: "8",
        name: "Soiled Femur",
        zone: "Western Thanalan",
        location: "Hammerlea",
        usage: "BSM, CRP, GSM, Provisioning",
        special: "Buyable",
    }, {
        level: "9",
        name: "Zinc Ore",
        zone: "Western Thanalan",
        location: "Hammerlea",
        usage: "GSM, Provisioning",
        special: "Buyable",
    }, {
        level: "10",
        name: "Obsidian",
        zone: "Western Thanalan",
        location: "Hammerlea",
        usage: "CRP, Provisioning",
        special: "Buyable",
    }, {
        level: "10",
        name: "Potter's Clay",
        zone: "North Shroud",
        location: "Treespeak",
        usage: "ALC, CRP, GSM",
        special: "Buyable",
    },
];
