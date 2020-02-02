import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Fishing_Log_Gyr_Abania = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- Rhalgr's Reach
    {
        level: "61",
        name: "Upper Mirage Creek",
        zone: "Rhalgr's Reach",
        location: "Rhalgr's Reach (11,14)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "62",
        name: "Rhalgr's Reach",
        zone: "Rhalgr's Reach",
        location: "Rhalgr's Reach (11,10)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "62",
        name: "The Outer Fist",
        zone: "Rhalgr's Reach",
        location: "Rhagr's Reach (12, 6)",
        type: "Freshwater",
        req: "Gulleye V"
    },
    //-------------------------------------------- The Fringes
    {
        level: "61",
        name: "Timmon Beck",
        zone: "The Fringes",
        location: "East End (11.4, 18)",
        type: "Freshwater",
        req: ""
    }, {
        level: "62",
        name: "Dimwold",
        zone: "The Fringes",
        location: "Dimwold (9.6, 29)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "62",
        name: "The Comet's Tail",
        zone: "The Fringes",
        location: "Pike Falls (13, 31)",
        type: "Freshwater",
        req: "Salmon Roe"
    }, {
        level: "61",
        name: "The Velodyna River",
        zone: "The Fringes",
        location: "The Striped Hills (17.7, 8.9)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "62",
        name: "Mirage Creek",
        zone: "The Fringes",
        location: "The Striped Hills (27.5, 16.5)",
        type: "Freshwater",
        req: "Gulleye V"
    },
    //-------------------------------------------- The Peaks
    {
        level: "61",
        name: "Grymm & Enid",
        zone: "The Peaks",
        location: "The Last Forest (6.5, 15.6)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "61",
        name: "The Slow Wash",
        zone: "The Peaks",
        location: "Rustrock (23.5, 9)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "65",
        name: "Heather Falls",
        zone: "The Peaks",
        location: "Rustrock (31.8, 7.1)",
        type: "Freshwater",
        req: ""
    }, {
        level: "70",
        name: "The Ephor",
        zone: "The Peaks",
        location: "Rustrock (31, 17)",
        type: "Freshwater",
        req: ""
    }, {
        level: "68",
        name: "The Bull's Bath",
        zone: "The Peaks",
        location: "Mount Yorn (25, 32.7)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "70",
        name: "The Arms of Meed",
        zone: "The Peaks",
        location: "Wightrock (9.3, 37.5)",
        type: "Freshwater",
        req: ""
    },
    //-------------------------------------------- The Lochs
    {
        level: "70",
        name: "Loch Seld",
        zone: "The Lochs",
        location: "Loch Seld (21,21)",
        type: "Saltlake",
        req: "Gulleye VI"
    },
];
