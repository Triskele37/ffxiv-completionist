import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_11_15 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "11",
        name: "Copper Sand",
        zone: "Western Thanalan",
        location: "Horizon's Edge"
    }, {
        level: "11",
        name: "Fine Sand",
        zone: "Central Thanalan",
        location: "Black Brush"
    }, {
        level: "12",
        name: "Rock Salt",
        zone: "Central Thanalan",
        location: "Black Brush"
    }, {
        level: "13",
        name: "Ragstone",
        zone: "Central Thanalan",
        location: "Black Brush"
    }, {
        level: "14",
        name: "Iron Sand",
        zone: "Western Thanalan",
        location: "Horizon's Edge"
    }, {
        level: "15",
        name: "Cinnabar",
        zone: "Western Thanalan",
        location: "Horizon's Edge"
    },
];
