import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Fishing_Log_Hingashi = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- Kugane
    {
        level: "63",
        name: "Kugane Piers",
        zone: "Kugane",
        location: "Pier 2 (12, 10.5)",
        type: "Saltwater",
        req: ""
    },
    //-------------------------------------------- Shirogane
    {
        level: "63",
        name: "Shirogane",
        zone: "Shirogane",
        location: "Shirogane (8,14)",
        type: "Saltwater",
        req: ""
    }, {
        level: "65",
        name: "The Silver Canal",
        zone: "Shirogane",
        location: "Kobai Goten (10,11)",
        type: "Freshwater",
        req: ""
    },
];
