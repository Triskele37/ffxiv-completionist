import { DataGroup } from "../DataGroup";

import { Logs_Hunting_Log } from "./hunting-log";
import { Logs_Sightseeing_Log } from "./sightseeing-log";
import { Logs_Crafting_Log } from "./crafting-log";
import { Logs_Gathering_Log } from "./gathering-log";
import { Logs_Orchestrion_List } from "./orchestrion-list";

export const Logs = function(parent) {
    const group = DataGroup.fromJSON(parent, "./logs/index");

    group.subGroups = [
        Logs_Hunting_Log(group),
        Logs_Sightseeing_Log(group),
        Logs_Crafting_Log(group),
        Logs_Gathering_Log(group),
        Logs_Orchestrion_List(group),
    ];

    return group;
};
