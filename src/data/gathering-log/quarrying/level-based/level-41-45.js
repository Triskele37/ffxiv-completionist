import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_41_45 = function(parent) {
    return new DataGroup("41-45", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "42",
        name: "Electrum Sand",
        zone: "Upper La Noscea",
        closestAetheryte: "Camp Bronze Lake",
        coordinates: "(x28,y22)",
        nodeTimer: ""
    }, {
        level: "45",
        name: "Marble",
        zone: "Upper La Noscea",
        closestAetheryte: "Camp Bronze Lake",
        coordinates: "(x28,y22)",
        nodeTimer: ""
    },
];
