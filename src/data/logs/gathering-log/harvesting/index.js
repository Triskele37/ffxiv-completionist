import { DataGroup } from "../../../DataGroup";

import { Logs_Gathering_Log_Harvesting_Level } from "./level-based";
import { Logs_Gathering_Log_Harvesting_Special } from "./special";

export const Logs_Gathering_Log_Harvesting = function(parent) {
    const group = DataGroup.fromJSON(parent, "./logs/gathering/harvesting/index", {
        level: { centered: true, filterable: true, filterType: "number" },
        zone: { filterable: true },
    });

    group.subGroups = [
        Logs_Gathering_Log_Harvesting_Level(group),
        Logs_Gathering_Log_Harvesting_Special(group),
	];

    return group;
};