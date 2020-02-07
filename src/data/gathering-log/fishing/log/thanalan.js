import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Fishing_Log_Thanalan = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- Western Thanalan
    {
        level: "5",
        name: "Nophica's Wells",
        zone: "Western Thanalan",
        location: "Hammerlea (24,21)",
        type: "Freshwater",
        req: ""
    }, {
        level: "10",
        name: "The Footfalls",
        zone: "Western Thanalan",
        location: "The Footfalls (17,15)",
        type: "Freshwater",
        req: ""
    }, {
        level: "15",
        name: "Vesper Bay",
        zone: "Western Thanalan",
        location: "The Footfalls (11,12)",
        type: "Saltwater",
        req: ""
    }, {
        level: "20",
        name: "Crescent Cove",
        zone: "Western Thanalan",
        location: "The Footfalls (14,18)",
        type: "Saltwater",
        req: ""
    }, {
        level: "25",
        name: "The Silver Bazaar",
        zone: "Western Thanalan",
        location: "Hammerlea (15,29)",
        type: "Saltwater",
        req: ""
    }, {
        level: "45",
        name: "Cape Westwind",
        zone: "Western Thanalan",
        location: "Cape Westwind (9,6)",
        type: "Saltwater",
        req: ""
    }, {
        level: "45",
        name: "Moondrip",
        zone: "Western Thanalan",
        location: "The Footfalls (17,6)",
        type: "Freshwater",
        req: ""
    }, {
        level: "50",
        name: "Parata's Peace",
        zone: "Western Thanalan",
        location: "The Footfalls (15,6)",
        type: "Freshwater",
        req: "Gulleye III"
    },
    //-------------------------------------------- Central Thanalan
    {
        level: "5",
        name: "Upper Soot Creek",
        zone: "Central Thanalan",
        location: "Black Brush (23,18)",
        type: "Freshwater",
        req: ""
    }, {
        level: "10",
        name: "Lower Soot Creek",
        zone: "Central Thanalan",
        location: "Black Brush (16,23)",
        type: "Freshwater",
        req: ""
    }, {
        level: "10",
        name: "The Clutch",
        zone: "Central Thanalan",
        location: "The Clutch (29,21)",
        type: "Freshwater",
        req: ""
    }, {
        level: "15",
        name: "The Unholy Heir",
        zone: "Central Thanalan",
        location: "The Clutch (27,19)",
        type: "Freshwater",
        req: ""
    },
    //-------------------------------------------- Eastern Thanalan
    {
        level: "15",
        name: "North Drybone",
        zone: "Eastern Thanalan",
        location: "Drybone (13,20)",
        type: "Freshwater",
        req: ""
    }, {
        level: "15",
        name: "South Drybone",
        zone: "Eastern Thanalan",
        location: "Drybone (17,24)",
        type: "Freshwater",
        req: ""
    }, {
        level: "30",
        name: "Yugr'am River",
        zone: "Eastern Thanalan",
        location: "Wellwick Wood (25,22)",
        type: "Freshwater",
        req: ""
    }, {
        level: "40",
        name: "The Burning Wall",
        zone: "Eastern Thanalan",
        location: "The Burning Wall (29,24)",
        type: "Freshwater",
        req: "Gulleye II"
    },
    //-------------------------------------------- Southern Thanalan
    {
        level: "25",
        name: "Burnt Lizard Creek",
        zone: "Southern Thanalan",
        location: "Broken Water (21,15)",
        type: "Freshwater",
        req: ""
    }, {
        level: "35",
        name: "Zahar'ak",
        zone: "Southern Thanalan",
        location: "Zahar'ak (25,20)",
        type: "Freshwater",
        req: ""
    }, {
        level: "35",
        name: "Forgotten Springs",
        zone: "Southern Thanalan",
        location: "Sagolii Desert (15,31)",
        type: "Freshwater",
        req: ""
    }, {
        level: "35",
        name: "Sagolii Desert",
        zone: "Southern Thanalan",
        location: "Sagolii Desert (12,35)",
        type: "Dunefishing",
        req: "Dunefishing"
    }, {
        level: "35",
        name: "Sagolii Dunes",
        zone: "Southern Thanalan",
        location: "Sagolii Desert (27,37)",
        type: "Dunefishing",
        req: "Dunefishing"
    },
    //-------------------------------------------- Northern Thanalan
    {
        level: "40",
        name: "Bluefog",
        zone: "Northern Thanalan",
        location: "Bluefog (24,25)",
        type: "Freshwater",
        req: ""
    }, {
        level: "45",
        name: "Ceruleum Field",
        zone: "Northern Thanalan",
        location: "Bluefog (16,20)",
        type: "Freshwater",
        req: ""
    },
    //-------------------------------------------- The Goblet
    {
        level: "30",
        name: "The Goblet",
        zone: "The Goblet",
        location: "The Goblet",
        type: "Freshwater",
        req: ""
    },
];
