import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Level_1_5 = function(parent) {
    return new DataGroup("1-5", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "Copper Ore",
        zone: "Western Thanalan",
        location: "Hammerlea",
        usage: "ARM, BSM, GSM, Provisioning",
        special: "Buyable",
    }, {
        level: "1",
        name: "Fire Shard",
        zone: "Western Thanalan",
        location: "Hammerlea",
        usage: "Catalyst",
        special: "",
    }, {
        level: "1",
        name: "Ice Shard",
        zone: "Western La Noscea",
        location: "Skull Valley",
        usage: "Catalyst",
        special: "",
    }, {
        level: "1",
        name: "Wind Shard",
        zone: "Central Thanalan",
        location: "Spineless Basin",
        usage: "Catalyst",
        special: "",
    }, {
        level: "1",
        name: "Earth Shard",
        zone: "Lower La Noscea",
        location: "Cedarwood",
        usage: "Catalyst",
        special: "",
    }, {
        level: "1",
        name: "Lightning Shard",
        zone: "Central Thanalan",
        location: "Spineless Basin",
        usage: "Catalyst",
        special: "",
    }, {
        level: "1",
        name: "Water Shard",
        zone: "Western Thanalan",
        location: "Hammerlea",
        usage: "Catalyst",
        special: "",
    }, {
        level: "3",
        name: "Muddy Water",
        zone: "Western Thanalan",
        location: "Hammerlea",
        usage: "ALC, Provisioning",
        special: "Buyable",
    }, {
        level: "5",
        name: "Bone Chip",
        zone: "Central Thanalan",
        location: "Spineless Basin",
        usage: "ALC, BSM, CRP, GSM, LTW, Provisioning",
        special: "Buyable",
    },
];
