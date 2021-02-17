import { DataGroup } from "../../../../DataGroup";

export const Logs_Gathering_Log_Fishing_Log_Hingashi = function(parent) {
    return new DataGroup("Hingashi", parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- Kugane
    {
        "name": "Kugane Piers",
        "level": "63",
        "zone": "Kugane",
        "location": "Pier 2 (12, 10.5)",
        "type": "Saltwater"
    },
    //-------------------------------------------- Shirogane
    {
        "name": "Shirogane",
        "level": "63",
        "zone": "Shirogane",
        "location": "Shirogane (8,14)",
        "type": "Saltwater"
    },
    {
        "name": "The Silver Canal",
        "level": "65",
        "zone": "Shirogane",
        "location": "Kobai Goten (10,11)",
        "type": "Freshwater"
    },
];
