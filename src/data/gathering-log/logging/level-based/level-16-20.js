import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Level_16_20 = function(parent) {
    return new DataGroup("16-20", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "16",
        name: "Faerie Apple",
        zone: "East Shroud",
        location: "Nine Ivies",
        usage: "CRP, CUL, Provisioning",
        special: "",
    }, {
        level: "16",
        name: "Faerie Apple Seeds",
        zone: "East Shroud",
        location: "Nine Ivies",
        usage: "Gardening",
        special: "Hidden",
    }, {
        level: "17",
        name: "Sun Lemon",
        zone: "Lower La Noscea",
        location: "The Grey Fleet",
        usage: "CUL, Provisioning",
        special: "Buyable",
    }, {
        level: "17",
        name: "Sun Lemon Seeds",
        zone: "Lower La Noscea",
        location: "The Grey Fleet",
        usage: "Gardening",
        special: "Hidden",
    }, {
        level: "18",
        name: "Nopales",
        zone: "Central Thanalan",
        location: "Black Brush",
        usage: "CUL, Provisioning",
        special: "",
    }, {
        level: "19",
        name: "Yew Log",
        zone: "East Shroud",
        location: "Nine Ivies",
        usage: "ALC, CRP, Provisioning",
        special: "",
    }, {
        level: "20",
        name: "Yew Branch",
        zone: "East Shroud",
        location: "Nine Ivies",
        usage: "ALC, BSM, CUL, Provisioning",
        special: "Buyable",
    }, {
        level: "20",
        name: "Grade 1 Carbonized Matter",
        zone: "Western La Noscea",
        location: "Skull Valley",
        usage: "Catalyst",
        special: "",
    },
];
