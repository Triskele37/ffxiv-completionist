import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Level_16_20 = function(parent) {
    return new DataGroup("16-20", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "16",
        name: "Paprika",
        zone: "Western La Noscea",
        location: "Quarterstone",
        usage: "CUL, Provisioning",
        special: "Buyable",
    }, {
        level: "16",
        name: "Galago Mint",
        zone: "East Shroud",
        location: "Nine Ivies",
        usage: "CUL, Provisioning",
        special: "Buyable",
    }, {
        level: "16",
        name: "Paprika Seeds",
        zone: "Western La Noscea",
        location: "Quarterstone",
        usage: "Gardening",
        special: "Hidden",
    }, {
        level: "17",
        name: "Lalafellin Lentil",
        zone: "Western La Noscea",
        location: "Quarterstone",
        usage: "CUL, Provisioning",
        special: "",
    }, {
        level: "18",
        name: "Popoto",
        zone: "Eastern Thanalan",
        location: "Sandgate",
        usage: "CUL, Provisioning",
        special: "",
    }, {
        level: "18",
        name: "Belladonna",
        zone: "East Shroud",
        location: "Nine Ivies",
        usage: "ALC, Provisioning",
        special: "",
    }, {
        level: "18",
        name: "Popoto Set",
        zone: "Eastern Thanalan",
        location: "Sandgate",
        usage: "Gardening",
        special: "Hidden",
    }, {
        level: "19",
        name: "Gil Bun",
        zone: "East Shroud",
        location: "Nine Ivies",
        usage: "ALC, CUL, Provisioning",
        special: "",
    }, {
        level: "20",
        name: "Island Seedling",
        zone: "Western La Noscea",
        location: "Quarterstone",
        usage: "ALC, CRP, FC Crafting",
        special: "",
    }, {
        level: "20",
        name: "Shroud Seedling",
        zone: "East Shroud",
        location: "Nine Ivies",
        usage: "ALC, GSM, FC Crafting",
        special: "",
    }, {
        level: "20",
        name: "Desert Seedling",
        zone: "Eastern Thanalan",
        location: "Sandgate",
        usage: "ALC, GSM",
        special: "",
    }, {
        level: "20",
        name: "White Scorpion",
        zone: "Eastern Thanalan",
        location: "Sandgate",
        usage: "ALC, Provisioning",
        special: "",
    },
];
