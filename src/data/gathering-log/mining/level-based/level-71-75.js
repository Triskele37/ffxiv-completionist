import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_71_75 = function(parent) {
    return new DataGroup("71-75", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "72",
        name: "Truegold Ore",
        zone: "Il Mheg",
        closestAetheryte: "Pla Enni",
        coordinates: "(x8,y20)",
        usage: "ARM, BSM, GSM, Provisioning",
        special: ""
    }, {
        level: "72",
        name: "Raw Diaspore",
        zone: "Il Mheg",
        closestAetheryte: "Wolekdorf",
        coordinates: "(x26,y13)",
        usage: "GSM, Collectable",
        special: "Unspoiled (6AM/PM)"
    }, {
        level: "73",
        name: "Highland Spring Water",
        zone: "Il Mheg",
        closestAetheryte: "Pla Enni",
        coordinates: "(x8,y20)",
        usage: "CUL, ALC, Collectable, Provisioning",
        special: ""
    }, {
        level: "73",
        name: "Animal Droppings",
        zone: "Lakeland",
        closestAetheryte: "Fort Jobb",
        coordinates: "(26,y34)",
        usage: "Delivery",
        special: ""
    }, {
        level: "74",
        name: "Raw Lazurite",
        zone: "The Rak'tika Greatwood",
        closestAetheryte: "Slitherbough",
        coordinates: "(x19,y21)",
        usage: "GSM",
        special: "Unspoiled (4AM/PM)"
    }, {
        level: "74",
        name: "Bluespirit Ore",
        zone: "Lakeland",
        closestAetheryte: "Fort Jobb",
        coordinates: "(26,y34)",
        usage: "ARM, BSM, Provisioning",
        special: ""
    }, {
        level: "75",
        name: "Megafauna Leftovers",
        zone: "Il Mheg",
        closestAetheryte: "Pla Enni",
        coordinates: "(x8,y20)",
        usage: "Delivery",
        special: ""
    },
];
