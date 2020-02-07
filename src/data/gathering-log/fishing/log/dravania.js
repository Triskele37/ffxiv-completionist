import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Fishing_Log_Dravania = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- The Dravanian Forelands
    {
        level: "52",
        name: "The Hundred Throes",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest (31,10)",
        type: "Freshwater",
        req: ""
    }, {
        level: "52",
        name: "Whilom River",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest (30,14)",
        type: "Freshwater",
        req: ""
    }, {
        level: "52",
        name: "The Smoldering Wastes",
        zone: "The Dravanian Forelands",
        location: "The Smoldering Wastes (25,25)",
        type: "Freshwater",
        req: ""
    }, {
        level: "55",
        name: "The Iron Feast",
        zone: "The Dravanian Forelands",
        location: "Abalathia Foothills (31,5)",
        type: "Freshwater",
        req: ""
    }, {
        level: "55",
        name: "Mourn",
        zone: "The Dravanian Forelands",
        location: "Mourn (13,13)",
        type: "Magma",
        req: "Hellfishing"
    }, {
        level: "56",
        name: "West Mourn",
        zone: "The Dravanian Forelands",
        location: "Mourn (9,7)",
        type: "Magma",
        req: "Hellfishing"
    }, {
        level: "57",
        name: "Anyx Old",
        zone: "The Dravanian Forelands",
        location: "Mourn (19,10)",
        type: "Magma",
        req: "Hellfishing"
    }, {
        level: "60",
        name: "Halo",
        zone: "The Dravanian Forelands",
        location: "Mourn (7,5)",
        type: "Magma",
        req: "Hellfishing"
    },
    //-------------------------------------------- The Dravanian Hinterlands
    {
        level: "57",
        name: "Thaliak River",
        zone: "The Dravanian Hinterlands",
        location: "The Ruling Quarter (18,18)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "58",
        name: "Quickspill Delta",
        zone: "The Dravanian Hinterlands",
        location: "The Answering Quarter (11,24)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "58",
        name: "Upper Thaliak River",
        zone: "The Dravanian Hinterlands",
        location: "Upper Thaliak River (22,35)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "60",
        name: "Middle Thaliak River",
        zone: "The Dravanian Hinterlands",
        location: "Middle Thaliak River (20,25)",
        type: "Freshwater",
        req: "Gulleye V"
    },
    //-------------------------------------------- The Churning Mists
    {
        level: "54",
        name: "Eil Tohm",
        zone: "The Churning Mists",
        location: "Eil Tohm (36,30)",
        type: "Freshwater",
        req: ""
    }, {
        level: "54",
        name: "Greensward",
        zone: "The Churning Mists",
        location: "Greensward (8,34)",
        type: "Freshwater",
        req: ""
    }, {
        level: "54",
        name: "Weston Waters",
        zone: "The Churning Mists",
        location: "Ohl Tahn (9,8)",
        type: "Freshwater",
        req: ""
    }, {
        level: "54",
        name: "Landlord Colony",
        zone: "The Churning Mists",
        location: "Landlord Colony (29,25)",
        type: "Floating Islands",
        req: "Cloudfishing"
    }, {
        level: "55",
        name: "Sohm Al Summit",
        zone: "The Churning Mists",
        location: "Sohm Al Summit (18,39)",
        type: "Floating Islands",
        req: "Cloudfishing"
    }, {
        level: "55",
        name: "Tharl Oom Khash",
        zone: "The Churning Mists",
        location: "Ohl Tahn (20,6)",
        type: "Floating Islands",
        req: "Cloudfishing"
    },
];
