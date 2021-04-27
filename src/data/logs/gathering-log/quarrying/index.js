import { DataGroup } from "../../../DataGroup";

import { Logs_Gathering_Log_Quarrying_Level } from "./level-based";
import { Logs_Gathering_Log_Quarrying_Special } from "./special";

export const Logs_Gathering_Log_Quarrying = function(parent) {
    const group = DataGroup.fromJSON(parent, "./logs/gathering/quarrying/index", {
        level: { centered: true, filterable: true, filterType: "number" },
        zone: { filterable: true },
    });

    group.subGroups = [
        Logs_Gathering_Log_Quarrying_Level(group),
        Logs_Gathering_Log_Quarrying_Special(group),
    ];

    return group;
};
