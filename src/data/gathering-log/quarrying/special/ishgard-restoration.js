import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Special_Ishgard_Restoration = function(parent) {
    return new DataGroup("Ishgard Restoration", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "15",
        name: "Skybuilders' Fine Sand",
        zone: "Central Thanalan",
        closestAetheryte: "Black Brush Station",
        coordinates: "(x21,y14)",
        usage: "Ishgard Restoration",
        special: ""
    }, {
        level: "25",
        name: "Skybuilders' Iron Sand",
        zone: "Eastern Thanalan",
        closestAetheryte: "Camp Drybone",
        coordinates: "(x13,y26)",
        usage: "Ishgard Restoration",
        special: ""
    }, {
        level: "55",
        name: "Skybuilders' Mythrite Sand",
        zone: "Coerthas Western Highlands",
        closestAetheryte: "Falcon's Nest",
        coordinates: "(x25,y9)",
        usage: "Ishgard Restoration",
        special: ""
    }, {
        level: "70",
        name: "Skybuilders' Durium Sand",
        zone: "The Azim Steppe",
        closestAetheryte: "Dhoro Iloh",
        coordinates: "(x12,y25)",
        usage: "Ishgard Restoration",
        special: ""
    }, {
        level: "80",
        name: "Skybuilders' Truegold Sand",
        zone: "Kholusia",
        closestAetheryte: "Stilltide",
        coordinates: "(x26,y10)",
        usage: "Ishgard Restoration",
        special: ""
    },
];
