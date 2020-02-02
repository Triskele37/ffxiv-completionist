import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_16_20 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "16",
        name: "Raw Malachite",
        zone: "Eastern Thanalan",
        location: "Drybone",
        usage: "GSM, Provisioning",
        special: "Buyable",
    }, {
        level: "17",
        name: "Raw Sphene",
        zone: "North Shroud",
        location: "Peacegarden",
        usage: "GSM",
        special: "Buyable",
    }, {
        level: "17",
        name: "Raw Fluorite",
        zone: "Eastern Thanalan",
        location: "Drybone",
        usage: "GSM, Provisioning",
        special: "Buyable",
    }, {
        level: "18",
        name: "Raw Danburite",
        zone: "Western La Noscea",
        location: "Skull Valley",
        usage: "GSM, Provisioning",
        special: "Buyable",
    }, {
        level: "19",
        name: "Sunrise Tellin",
        zone: "Western La Noscea",
        location: "Skull Valley",
        usage: "BSM, CRP, WVR, Provisioning",
        special: "",
    }, {
        level: "19",
        name: "Alumen",
        zone: "Eastern Thanalan",
        location: "Drybone",
        usage: "LTW, Provisioning",
        special: "",
    },
];
