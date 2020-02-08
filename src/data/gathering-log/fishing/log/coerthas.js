import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Fishing_Log_Coerthas = function(parent) {
    return new DataGroup("Coerthas", parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- Coerthas Central Highlands
    {
        level: "35",
        name: "Coerthas River",
        zone: "Coerthas Central Highlands",
        location: "Boulder Downs (20,30)",
        type: "Freshwater",
        req: ""
    }, {
        level: "35",
        name: "Daniffen Pass",
        zone: "Coerthas Central Highlands",
        location: "Boulder Downs (13,23)",
        type: "Freshwater",
        req: ""
    }, {
        level: "40",
        name: "The Nail",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim (16,21)",
        type: "Freshwater",
        req: ""
    }, {
        level: "40",
        name: "Dragonhead Latrines",
        zone: "Coerthas Central Highlands",
        location: "Providence Point (28,17)",
        type: "Freshwater",
        req: ""
    }, {
        level: "40",
        name: "Exploratory Ice Hole",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim (6,22)",
        type: "Freshwater",
        req: ""
    }, {
        level: "45",
        name: "The Weeping Saint",
        zone: "Coerthas Central Highlands",
        location: "Providence Point (31,7)",
        type: "Freshwater",
        req: "Gulleye III"
    }, {
        level: "45",
        name: "Snowcloak",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim (3,21)",
        type: "Freshwater",
        req: ""
    }, {
        level: "45",
        name: "Sea of Clouds",
        zone: "Coerthas Central Highlands",
        location: "Whitebrim (13,14)",
        type: "Cloudfishing",
        req: "Skyfishing"
    }, {
        level: "50",
        name: "Witchdrop",
        zone: "Coerthas Central Highlands",
        location: "Providence Point (33,18)",
        type: "Cloudfishing",
        req: "Skyfishing"
    },
    //-------------------------------------------- Coerthas Western Highlands
    {
        level: "50",
        name: "Riversmeet",
        zone: "Coerthas Western Highlands",
        location: "Riversmeet (32,27)",
        type: "Freshwater",
        req: ""
    }, {
        level: "51",
        name: "Greytail Falls",
        zone: "Coerthas Western Highlands",
        location: "Riversmeet (35,26)",
        type: "Cloudfishing",
        req: "Skyfishing"
    }, {
        level: "52",
        name: "Unfrozen Pond",
        zone: "Coerthas Western Highlands",
        location: "Twinpools (28,18)",
        type: "Freshwater",
        req: ""
    }, {
        level: "60",
        name: "Clearpool",
        zone: "Coerthas Western Highlands",
        location: "Riversmeet (36,6)",
        type: "Freshwater",
        req: ""
    }, {
        level: "60",
        name: "Dragonspit",
        zone: "Coerthas Western Highlands",
        location: "Twinpools (8,10)",
        type: "Freshwater",
        req: ""
    }, {
        level: "53",
        name: "South Banepool",
        zone: "Coerthas Western Highlands",
        location: "Twinpools (21,11)",
        type: "Freshwater",
        req: ""
    }, {
        level: "52",
        name: "Ashpool",
        zone: "Coerthas Western Highlands",
        location: "Twinpools (14,15)",
        type: "Freshwater",
        req: ""
    }, {
        level: "53",
        name: "West Banepool",
        zone: "Coerthas Western Highlands",
        location: "Twinpools (13,8)",
        type: "Freshwater",
        req: ""
    },
];
