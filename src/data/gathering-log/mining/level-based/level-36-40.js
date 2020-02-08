import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_36_40 = function(parent) {
    return new DataGroup("36-40", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "36",
        name: "Raw Tourmaline",
        zone: "South Shroud",
        location: "Urth's Gift",
        usage: "ALC, GSM, Provisioning",
        special: "",
    }, {
        level: "37",
        name: "Raw Spinel",
        zone: "South Shroud",
        location: "Urth's Gift",
        usage: "ALC, GSM, Provisioning",
        special: "",
    }, {
        level: "38",
        name: "Raw Zircon",
        zone: "Coerthas Central Highlands",
        location: "Dragonhead",
        usage: "ALC, GSM, Provisioning",
        special: "",
    }, {
        level: "39",
        name: "Jade",
        zone: "Coerthas Central Highlands",
        location: "Dragonhead",
        usage: "GSM, Provisioning",
        special: "",
    }, {
        level: "40",
        name: "Black Alumen",
        zone: "South Shroud",
        location: "Urth's Gift",
        usage: "ALC, LTW, Provisioning",
        special: "",
    },
];
