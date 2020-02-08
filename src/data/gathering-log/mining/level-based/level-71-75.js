import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_71_75 = function(parent) {
    return new DataGroup("71-75", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "72",
        name: "Truegold Ore",
        zone: "Il Mheg",
        location: "The Bookman's Shelves",
        usage: "ARM, BSM, GSM, Provisioning",
        special: "",
    }, {
        level: "72",
        name: "Raw Diaspore",
        zone: "Il Mheg",
        location: "Sextuplet Shallow",
        usage: "GSM, Collectable",
        special: "Unspoiled 6 AM/PM",
    }, {
        level: "73",
        name: "Highland Spring Water",
        zone: "Il Mheg",
        location: "The Bookman's Shelves",
        usage: "CUL, ALC, Collectable, Provisioning",
        special: "",
    }, {
        level: "73",
        name: "Animal Droppings",
        zone: "Lakeland",
        location: "Weed",
        usage: "Delivery",
        special: "",
    }, {
        level: "74",
        name: "Raw Lazurite",
        zone: "The Rak'tika Greatwood",
        location: "Cleric",
        usage: "GSM",
        special: "Unspoiled 4-6 AM/PM",
    }, {
        level: "74",
        name: "Bluespirit Ore",
        zone: "Lakeland",
        location: "Weed",
        usage: "ARM, BSM, Provisioning",
        special: "",
    }, {
        level: "75",
        name: "Megafauna Leftovers",
        zone: "Il Mheg",
        location: "The Bookman's Shelves",
        usage: "Delivery",
        special: "",
    },
];
