import { DataGroup } from "../../../../DataGroup";

export const Logs_Gathering_Log_Fishing_Log_Coerthas = function(parent) {
    return new DataGroup("Coerthas", parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- Coerthas Central Highlands
    {
        "name": "Coerthas River",
        "level": "35",
        "zone": "Coerthas Central Highlands",
        "location": "Boulder Downs (20,30)",
        "type": "Freshwater"
    },
    {
        "name": "Daniffen Pass",
        "level": "35",
        "zone": "Coerthas Central Highlands",
        "location": "Boulder Downs (13,23)",
        "type": "Freshwater"
    },
    {
        "name": "The Nail",
        "level": "40",
        "zone": "Coerthas Central Highlands",
        "location": "Whitebrim (16,21)",
        "type": "Freshwater"
    },
    {
        "name": "Dragonhead Latrines",
        "level": "40",
        "zone": "Coerthas Central Highlands",
        "location": "Providence Point (28,17)",
        "type": "Freshwater"
    },
    {
        "name": "Exploratory Ice Hole",
        "level": "40",
        "zone": "Coerthas Central Highlands",
        "location": "Whitebrim (6,22)",
        "type": "Freshwater"
    },
    {
        "name": "The Weeping Saint",
        "level": "45",
        "zone": "Coerthas Central Highlands",
        "location": "Providence Point (31,7)",
        "type": "Freshwater"
    },
    {
        "name": "Snowcloak",
        "level": "45",
        "zone": "Coerthas Central Highlands",
        "location": "Whitebrim (3,21)",
        "type": "Freshwater"
    },
    {
        "name": "Sea of Clouds",
        "level": "45",
        "zone": "Coerthas Central Highlands",
        "location": "Whitebrim (13,14)",
        "type": "Cloudfishing"
    },
    {
        "name": "Witchdrop",
        "level": "50",
        "zone": "Coerthas Central Highlands",
        "location": "Providence Point (33,18)",
        "type": "Cloudfishing"
    },
    //-------------------------------------------- Coerthas Western Highlands
    {
        "name": "Riversmeet",
        "level": "50",
        "zone": "Coerthas Western Highlands",
        "location": "Riversmeet (32,27)",
        "type": "Freshwater"
    },
    {
        "name": "Greytail Falls",
        "level": "51",
        "zone": "Coerthas Western Highlands",
        "location": "Riversmeet (35,26)",
        "type": "Cloudfishing"
    },
    {
        "name": "Unfrozen Pond",
        "level": "52",
        "zone": "Coerthas Western Highlands",
        "location": "Twinpools (28,18)",
        "type": "Freshwater"
    },
    {
        "name": "Clearpool",
        "level": "60",
        "zone": "Coerthas Western Highlands",
        "location": "Riversmeet (36,6)",
        "type": "Freshwater"
    },
    {
        "name": "Dragonspit",
        "level": "60",
        "zone": "Coerthas Western Highlands",
        "location": "Twinpools (8,10)",
        "type": "Freshwater"
    },
    {
        "name": "South Banepool",
        "level": "53",
        "zone": "Coerthas Western Highlands",
        "location": "Twinpools (21,11)",
        "type": "Freshwater"
    },
    {
        "name": "Ashpool",
        "level": "52",
        "zone": "Coerthas Western Highlands",
        "location": "Twinpools (14,15)",
        "type": "Freshwater"
    },
    {
        "name": "West Banepool",
        "level": "53",
        "zone": "Coerthas Western Highlands",
        "location": "Twinpools (13,8)",
        "type": "Freshwater"
    },
];
