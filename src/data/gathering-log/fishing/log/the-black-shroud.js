import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Fishing_Log_The_Black_Shroud = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- New Gridania
    {
        level: "5",
        name: "Jadeite Flood",
        zone: "Gridania",
        location: "New Gridania (12,13)",
        type: "Freshwater",
        req: ""
    }, {
        level: "5",
        name: "Lower Black Tea Brook",
        zone: "Gridania",
        location: "New Gridania (10,11)",
        type: "Freshwater",
        req: ""
    },
    //-------------------------------------------- Old Gridania
    {
        level: "5",
        name: "Whispering Gorge",
        zone: "Gridania",
        location: "Old Gridania (15,6)",
        type: "Freshwater",
        req: ""
    }, {
        level: "5",
        name: "Upper Black Tea Brook",
        zone: "Gridania",
        location: "Old Gridania (8,8)",
        type: "Freshwater",
        req: ""
    },
    //-------------------------------------------- Central Shroud
    {
        level: "5",
        name: "The Vein",
        zone: "Central Shroud",
        location: "Jadeite Thick (22,21)",
        type: "Freshwater",
        req: ""
    }, {
        level: "15",
        name: "The Mirror",
        zone: "Central Shroud",
        location: "Bentbranch (26,28)",
        type: "Freshwater",
        req: ""
    }, {
        level: "30",
        name: "Everschade",
        zone: "Central Shroud",
        location: "Bentbranch (15,24)",
        type: "Freshwater",
        req: ""
    }, {
        level: "35",
        name: "Hopeseed Pond",
        zone: "Central Shroud",
        location: "Sorrel Haven (13,21)",
        type: "Freshwater",
        req: ""
    }, {
        level: "35",
        name: "Haukke Manor",
        zone: "Central Shroud",
        location: "Sorrel Haven (10,22)",
        type: "Freshwater",
        req: ""
    },
    //-------------------------------------------- East Shroud
    {
        level: "15",
        name: "Sweetbloom Pier",
        zone: "East Shroud",
        location: "The Honey Yard (10,22)",
        type: "Freshwater",
        req: ""
    }, {
        level: "15",
        name: "Springripple Brook",
        zone: "East Shroud",
        location: "Nine Ivies (24,25)",
        type: "Freshwater",
        req: ""
    }, {
        level: "20",
        name: "Sanctum of the Twelve",
        zone: "East Shroud",
        location: "The Bramble Patch (17,16)",
        type: "Freshwater",
        req: ""
    }, {
        level: "25",
        name: "Verdant Drop",
        zone: "East Shroud",
        location: "The Bramble Patch (20,21)",
        type: "Freshwater",
        req: ""
    }, {
        level: "45",
        name: "Sylphlands",
        zone: "East Shroud",
        location: "Sylphlands (26,20)",
        type: "Freshwater",
        req: ""
    },
    //-------------------------------------------- South Shroud
    {
        level: "20",
        name: "Upper Hathoeva River",
        zone: "South Shroud",
        location: "Upper Paths (18,19)",
        type: "Freshwater",
        req: ""
    }, {
        level: "25",
        name: "Lower Hathoeva River",
        zone: "South Shroud",
        location: "Lower Paths (18,24)",
        type: "Freshwater",
        req: ""
    }, {
        level: "25",
        name: "East Hathoeva River",
        zone: "South Shroud",
        location: "Silent Arbor (24,22)",
        type: "Freshwater",
        req: ""
    }, {
        level: "30",
        name: "Middle Hathoeva River",
        zone: "South Shroud",
        location: "Upper Paths (19,22)",
        type: "Freshwater",
        req: ""
    }, {
        level: "30",
        name: "Goblinblood",
        zone: "South Shroud",
        location: "Silent Arbor (27,21)",
        type: "Freshwater",
        req: ""
    }, {
        level: "35",
        name: "Rootslake",
        zone: "South Shroud",
        location: "Lower Paths (18,29)",
        type: "Freshwater",
        req: ""
    }, {
        level: "45",
        name: "Urth's Gift",
        zone: "South Shroud",
        location: "Urth's Gift (32,23)",
        type: "Freshwater",
        req: ""
    },
    //-------------------------------------------- North Shroud
    {
        level: "15",
        name: "Murmur Rills",
        zone: "North Shroud",
        location: "Treespeak (26,25)",
        type: "Freshwater",
        req: ""
    }, {
        level: "15",
        name: "Fallgourd Float",
        zone: "North Shroud",
        location: "Alder Springs (21,24)",
        type: "Freshwater",
        req: ""
    }, {
        level: "40",
        name: "Proud Creek",
        zone: "North Shroud",
        location: "Proud Creek (20,20)",
        type: "Freshwater",
        req: ""
    }, {
        level: "50",
        name: "Lake Tahtotl",
        zone: "North Shroud",
        location: "Proud Creek (18,19)",
        type: "Freshwater",
        req: "Gulleye III"
    },
    //-------------------------------------------- The Lavendar Beds
    {
        level: "30",
        name: "Lavender Beds",
        zone: "Lavender Beds",
        location: "Lavender Beds",
        type: "Freshwater",
        req: ""
    },
];
