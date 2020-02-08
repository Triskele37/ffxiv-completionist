import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Fishing_Log_Mor_Dhona = function(parent) {
    return new DataGroup("Mor Dhona", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "45",
        name: "North Silvertear",
        zone: "Mor Dhona",
        location: "North Silvertear (24,12)",
        type: "Freshwater",
        req: "Gulleye II"
    }, {
        level: "45",
        name: "The Deep Tangle",
        zone: "Mor Dhona",
        location: "Fogfens (12,11)",
        type: "Freshwater",
        req: "Gulleye II"
    }, {
        level: "45",
        name: "Singing Shards",
        zone: "Mor Dhona",
        location: "North Silvertear (28,10)",
        type: "Freshwater",
        req: "Gulleye III"
    }, {
        level: "50",
        name: "Rathefrost",
        zone: "Mor Dhona",
        location: "Fogfens (18,17)",
        type: "Freshwater",
        req: "Gulleye III"
    }, {
        level: "50",
        name: "The Tangle",
        zone: "Mor Dhona",
        location: "Fogfens (14,13)",
        type: "Freshwater",
        req: ""
    }, {
        level: "50",
        name: "The North Shards",
        zone: "Mor Dhona",
        location: "North Silvertear (31,6)",
        type: "Freshwater",
        req: "Gulleye II"
    },
];
