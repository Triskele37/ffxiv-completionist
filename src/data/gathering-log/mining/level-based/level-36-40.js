import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_36_40 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "36",
        name: "Raw Tourmaline",
        zone: "South Shroud",
        location: "Urth's Gift"
    }, {
        level: "37",
        name: "Raw Spinel",
        zone: "South Shroud",
        location: "Urth's Gift"
    }, {
        level: "38",
        name: "Raw Zircon",
        zone: "Coerthas Central Highlands",
        location: "Dragonhead"
    }, {
        level: "39",
        name: "Jade",
        zone: "Coerthas Central Highlands",
        location: "Dragonhead"
    }, {
        level: "40",
        name: "Black Alumen",
        zone: "South Shroud",
        location: "Urth's Gift"
    },
];
