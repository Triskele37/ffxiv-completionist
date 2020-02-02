import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_76_80 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "76",
        name: "Raw Triplite",
        zone: "Amh Araeng",
        location: "Ladle"
    }, {
        level: "76",
        name: "Gale Rock",
        zone: "The Rak'tika Greatwood",
        location: "The Wild Fete"
    }, {
        level: "76",
        name: "Solarite",
        zone: "Lakeland",
        location: "The Church of the First Light"
    }, {
        level: "76",
        name: "Extra Effervescent Water",
        zone: "The Rak'tika Greatwood",
        location: "The Wild Fete"
    }, {
        level: "77",
        name: "Titancopper Ore",
        zone: "Lakeland",
        location: "The Church of the First Light"
    }, {
        level: "78",
        name: "Raw Petalife",
        zone: "Lakeland",
        location: "Weed"
    }, {
        level: "78",
        name: "Underground Spring Water",
        zone: "Lakeland",
        location: "The Church of the First Light"
    }, {
        level: "78",
        name: "Megafauna Trace",
        zone: "The Rak'tika Greatwood",
        location: "The Wild Fete"
    }, {
        level: "80",
        name: "Dimythrite Ore",
        zone: "Lakeland",
        location: "The Church of the First Light"
    }, {
        level: "80",
        name: "Raw Onyx",
        zone: "The Tempest",
        location: "The Caliban Gorge"
    },
];
