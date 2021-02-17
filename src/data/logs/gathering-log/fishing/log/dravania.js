import { DataGroup } from "../../../../DataGroup";

export const Logs_Gathering_Log_Fishing_Log_Dravania = function(parent) {
    return new DataGroup("Dravania", parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- The Dravanian Forelands
    {
        "name": "The Hundred Throes",
        "level": "52",
        "zone": "The Dravanian Forelands",
        "location": "Chocobo Forest (31,10)",
        "type": "Freshwater"
    },
    {
        "name": "Whilom River",
        "level": "52",
        "zone": "The Dravanian Forelands",
        "location": "Chocobo Forest (30,14)",
        "type": "Freshwater"
    },
    {
        "name": "The Smoldering Wastes",
        "level": "52",
        "zone": "The Dravanian Forelands",
        "location": "The Smoldering Wastes (25,25)",
        "type": "Freshwater"
    },
    {
        "name": "The Iron Feast",
        "level": "55",
        "zone": "The Dravanian Forelands",
        "location": "Abalathia Foothills (31,5)",
        "type": "Freshwater"
    },
    {
        "name": "Mourn",
        "level": "55",
        "zone": "The Dravanian Forelands",
        "location": "Mourn (13,13)",
        "type": "Magma"
    },
    {
        "name": "West Mourn",
        "level": "56",
        "zone": "The Dravanian Forelands",
        "location": "Mourn (9,7)",
        "type": "Magma"
    },
    {
        "name": "Anyx Old",
        "level": "57",
        "zone": "The Dravanian Forelands",
        "location": "Mourn (19,10)",
        "type": "Magma"
    },
    {
        "name": "Halo",
        "level": "60",
        "zone": "The Dravanian Forelands",
        "location": "Mourn (7,5)",
        "type": "Magma"
    },
    //-------------------------------------------- The Dravanian Hinterlands
    {
        "name": "Thaliak River",
        "level": "57",
        "zone": "The Dravanian Hinterlands",
        "location": "The Ruling Quarter (18,18)",
        "type": "Freshwater"
    },
    {
        "name": "Quickspill Delta",
        "level": "60",
        "zone": "The Dravanian Hinterlands",
        "location": "The Answering Quarter (11,24)",
        "type": "Freshwater"
    },
    {
        "name": "Upper Thaliak River",
        "level": "58",
        "zone": "The Dravanian Hinterlands",
        "location": "Upper Thaliak River (22,35)",
        "type": "Freshwater"
    },
    {
        "name": "Middle Thaliak River",
        "level": "60",
        "zone": "The Dravanian Hinterlands",
        "location": "Middle Thaliak River (20,25)",
        "type": "Freshwater"
    },
    //-------------------------------------------- The Churning Mists
    {
        "name": "Eil Tohm",
        "level": "54",
        "zone": "The Churning Mists",
        "location": "Eil Tohm (36,30)",
        "type": "Freshwater"
    },
    {
        "name": "Greensward",
        "level": "54",
        "zone": "The Churning Mists",
        "location": "Greensward (8,34)",
        "type": "Freshwater"
    },
    {
        "name": "Weston Waters",
        "level": "54",
        "zone": "The Churning Mists",
        "location": "Ohl Tahn (9,8)",
        "type": "Freshwater"
    },
    {
        "name": "Landlord Colony",
        "level": "54",
        "zone": "The Churning Mists",
        "location": "Landlord Colony (29,25)",
        "type": "Floating Islands"
    },
    {
        "name": "Sohm Al Summit",
        "level": "55",
        "zone": "The Churning Mists",
        "location": "Sohm Al Summit (18,39)",
        "type": "Floating Islands"
    },
    {
        "name": "Tharl Oom Khash",
        "level": "55",
        "zone": "The Churning Mists",
        "location": "Ohl Tahn (20,6)",
        "type": "Floating Islands"
    },
];
