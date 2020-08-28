import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_16_20 = function(parent) {
    return new DataGroup("16-20", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "17",
        name: "Limestone",
        zone: "Western La Noscea",
        closestAetheryte: "Aleport",
        coordinates: "(x26,y24)",
        nodeTimer: ""
    }, {
        level: "20",
        name: "Mudstone",
        zone: "Western La Noscea",
        closestAetheryte: "Aleport",
        coordinates: "(x26,y24)",
        nodeTimer: ""
    }, {
        level: "20",
        name: "Grade 1 Carbonized Matter",
        zone: "Middle La Noscea",
        closestAetheryte: "Swiftperch -> Middle La Noscea",
        coordinates: "(x15,y10)",
        nodeTimer: ""
    },
];
