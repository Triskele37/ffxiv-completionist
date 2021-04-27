import { DataGroup } from "../../../DataGroup";

import { Logs_Gathering_Log_Mining_Level } from "./level-based";
import { Logs_Gathering_Log_Mining_Special } from "./special";

export const Logs_Gathering_Log_Mining = function(parent) {
    const group = DataGroup.fromJSON(parent, "./logs/gathering/mining/index", {
        level: { centered: true, filterable: true, filterType: "number" },
        zone: { filterable: true },
    });

    group.subGroups = [
        Logs_Gathering_Log_Mining_Level(group),
        Logs_Gathering_Log_Mining_Special(group),
    ];

    return group;
};
