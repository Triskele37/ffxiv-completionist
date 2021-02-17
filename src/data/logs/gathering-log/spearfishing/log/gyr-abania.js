import { DataGroup } from "../../../../DataGroup";

export const Logs_Gathering_Log_Spearfishing_Log_Gyr_Abania = function(parent) {
    return new DataGroup("Gyr Abania", parent).initializeTasks(tasks);
};

const tasks = [
    {
        "name": "Loch Seld Northwestern Lakebed",
        "level": "70",
        "zone": "The Lochs",
        "location": "Loch Seld (13.9, 18.6)",
        "type": "Spearfishing"
    },
    {
        "name": "Loch Seld Central Lakebed",
        "level": "70",
        "zone": "The Lochs",
        "location": "Loch Seld (20.8, 23.0)",
        "type": "Spearfishing"
    },
    {
        "name": "Loch Seld Southeastern Lakebed",
        "level": "70",
        "zone": "The Lochs",
        "location": "Loch Seld (24.6, 28.0)",
        "type": "Spearfishing"
    },
    {
        "name": "Loch Seld Deep Lakebed",
        "level": "70",
        "zone": "The Lochs",
        "location": "Loch Seld (22.2, 24.9)",
        "type": "Spearfishing"
    },
];
