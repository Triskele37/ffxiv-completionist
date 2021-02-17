import { DataGroup } from "../../../../DataGroup";

export const Logs_Gathering_Log_Fishing_Log_Gyr_Abania = function(parent) {
    return new DataGroup("Gyr Abania", parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- Rhalgr's Reach
    {
        "name": "Upper Mirage Creek",
        "level": "61",
        "zone": "Rhalgr's Reach",
        "location": "Rhalgr's Reach (11,14)",
        "type": "Freshwater"
    },
    {
        "name": "Rhalgr's Reach",
        "level": "62",
        "zone": "Rhalgr's Reach",
        "location": "Rhalgr's Reach (11,10)",
        "type": "Freshwater"
    },
    {
        "name": "The Outer Fist",
        "level": "62",
        "zone": "Rhalgr's Reach",
        "location": "Rhagr's Reach (12, 6)",
        "type": "Freshwater"
    },
    //-------------------------------------------- The Fringes
    {
        "name": "Timmon Beck",
        "level": "61",
        "zone": "The Fringes",
        "location": "East End (11.4, 18)",
        "type": "Freshwater"
    },
    {
        "name": "Dimwold",
        "level": "62",
        "zone": "The Fringes",
        "location": "Dimwold (9.6, 29)",
        "type": "Freshwater"
    },
    {
        "name": "The Comet's Tail",
        "level": "62",
        "zone": "The Fringes",
        "location": "Pike Falls (13, 31)",
        "type": "Freshwater"
    },
    {
        "name": "The Velodyna River",
        "level": "61",
        "zone": "The Fringes",
        "location": "The Striped Hills (17.7, 8.9)",
        "type": "Freshwater"
    },
    {
        "name": "Mirage Creek",
        "level": "62",
        "zone": "The Fringes",
        "location": "The Striped Hills (27.5, 16.5)",
        "type": "Freshwater"
    },
    //-------------------------------------------- The Peaks
    {
        "name": "Grymm & Enid",
        "level": "61",
        "zone": "The Peaks",
        "location": "The Last Forest (6.5, 15.6)",
        "type": "Freshwater"
    },
    {
        "name": "The Slow Wash",
        "level": "61",
        "zone": "The Peaks",
        "location": "Rustrock (23.5, 9)",
        "type": "Freshwater"
    },
    {
        "name": "Heather Falls",
        "level": "65",
        "zone": "The Peaks",
        "location": "Rustrock (31.8, 7.1)",
        "type": "Freshwater"
    },
    {
        "name": "The Ephor",
        "level": "70",
        "zone": "The Peaks",
        "location": "Rustrock (31, 17)",
        "type": "Freshwater"
    },
    {
        "name": "The Bull's Bath",
        "level": "68",
        "zone": "The Peaks",
        "location": "Mount Yorn (25, 32.7)",
        "type": "Freshwater"
    },
    {
        "name": "The Arms of Meed",
        "level": "70",
        "zone": "The Peaks",
        "location": "Wightrock (9.3, 37.5)",
        "type": "Freshwater"
    },
    //-------------------------------------------- The Lochs
    {
        "name": "Loch Seld",
        "level": "70",
        "zone": "The Lochs",
        "location": "Loch Seld (21,21)",
        "type": "Saltlake"
    },
];
