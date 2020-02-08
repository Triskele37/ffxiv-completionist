import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Spearfishing_Log_Gyr_Abania = function(parent) {
    return new DataGroup("Gyr Abania", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70",
        name: "Loch Seld Northwestern Lakebed",
        zone: "The Lochs",
        location: "Loch Seld (13, 18)",
        type: "Spearfishing",
        req: ""
    }, {
        level: "70",
        name: "Loch Seld Central Lakebed",
        zone: "The Lochs",
        location: "Loch Seld (22, 23)",
        type: "Spearfishing",
        req: ""
    }, {
        level: "70",
        name: "Loch Seld Southeastern Lakebed",
        zone: "The Lochs",
        location: "Loch Seld (26, 28)",
        type: "Spearfishing",
        req: ""
    },
];
