import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_76_80 = function(parent) {
    return new DataGroup("76-80", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "76",
        name: "Raw Triplite",
        zone: "Amh Araeng",
        closestAetheryte: "The Inn at Journey's Head",
        coordinates: "(x20,y29)",
        usage: "GSM, Collectable",
        special: "Unspoiled (12AM/PM)"
    }, {
        level: "76",
        name: "Gale Rock",
        zone: "The Rak'tika Greatwood",
        closestAetheryte: "Slitherbough",
        coordinates: "(x25,y28)",
        usage: "Collectable",
        special: "Ephemeral (12AM)"
    }, {
        level: "76",
        name: "Solarite",
        zone: "Lakeland",
        closestAetheryte: "Fort Jobb",
        coordinates: "(x36,y14)",
        usage: "Reducible",
        special: "Ephemeral (8AM)"
    }, {
        level: "76",
        name: "Extra Effervescent Water",
        zone: "The Rak'tika Greatwood",
        closestAetheryte: "Slitherbough",
        coordinates: "(x23,y28)",
        usage: "ALC, Collectable",
        special: ""
    }, {
        level: "77",
        name: "Titancopper Ore",
        zone: "Lakeland",
        closestAetheryte: "Fort Jobb",
        coordinates: "(x35,y16)",
        usage: "ARM, BSM, Provisioning",
        special: ""
    }, {
        level: "78",
        name: "Raw Petalite",
        zone: "Lakeland",
        closestAetheryte: "Fort Jobb",
        coordinates: "(x28,y33)",
        usage: "GSM, Collectable",
        special: "Unspoiled (6AM/PM)"
    }, {
        level: "78",
        name: "Underground Spring Water",
        zone: "Lakeland",
        closestAetheryte: "Fort Jobb",
        coordinates: "(x35,y16)",
        usage: "ALC, CUL, Collectable, Provisioning",
        special: ""
    }, {
        level: "78",
        name: "Megafauna Trace",
        zone: "The Rak'tika Greatwood",
        closestAetheryte: "Slitherbough",
        coordinates: "(x23,y28)",
        usage: "Delivery",
        special: ""
    }, {
        level: "80",
        name: "Dimythrite Ore",
        zone: "Lakeland",
        closestAetheryte: "Fort Jobb",
        coordinates: "(x35,y16)",
        usage: "ARM, BSM, Collectable, Provisioning",
        special: ""
    }, {
        level: "80",
        name: "Raw Onyx",
        zone: "The Tempest",
        closestAetheryte: "Macarenses Angle",
        coordinates: "(x16,y21)",
        usage: "GSM, Collectable",
        special: "Unspoiled (12AM/PM)"
    },
];
