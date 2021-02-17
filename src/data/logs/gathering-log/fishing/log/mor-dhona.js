import { DataGroup } from "../../../../DataGroup";

export const Logs_Gathering_Log_Fishing_Log_Mor_Dhona = function(parent) {
    return new DataGroup("Mor Dhona", parent).initializeTasks(tasks);
};

const tasks = [
    {
        "name": "North Silvertear",
        "level": "45",
        "zone": "Mor Dhona",
        "location": "North Silvertear (24,12)",
        "type": "Freshwater"
    },
    {
        "name": "The Deep Tangle",
        "level": "45",
        "zone": "Mor Dhona",
        "location": "Fogfens (12,11)",
        "type": "Freshwater"
    },
    {
        "name": "Singing Shards",
        "level": "45",
        "zone": "Mor Dhona",
        "location": "North Silvertear (28,10)",
        "type": "Freshwater"
    },
    {
        "name": "Rathefrost",
        "level": "50",
        "zone": "Mor Dhona",
        "location": "Fogfens (18,17)",
        "type": "Freshwater"
    },
    {
        "name": "The Tangle",
        "level": "50",
        "zone": "Mor Dhona",
        "location": "Fogfens (14,13)",
        "type": "Freshwater"
    },
    {
        "name": "The North Shards",
        "level": "50",
        "zone": "Mor Dhona",
        "location": "North Silvertear (31,6)",
        "type": "Freshwater"
    },
];
