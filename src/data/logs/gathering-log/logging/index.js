import { DataGroup } from "../../../DataGroup";

import { Logs_Gathering_Log_Logging_Level } from "./level-based";
import { Logs_Gathering_Log_Logging_Special } from "./special";

export const Logs_Gathering_Log_Logging = function(parent) {
    const group = DataGroup.fromJSON(parent, "./logs/gathering/logging/index", {
        level: { centered: true, filterable: true, filterType: "number" },
        zone: { filterable: true },
    });

    group.subGroups = [
        Logs_Gathering_Log_Logging_Level(group),
        Logs_Gathering_Log_Logging_Special(group),
    ];

    return group;
};
