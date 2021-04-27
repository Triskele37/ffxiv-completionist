import { DataGroup } from "../DataGroup";

import { Logs_Hunting_Log } from "./hunting-log";
import { Logs_Sightseeing_Log } from "./sightseeing-log";
import { Logs_Crafting_Log } from "./crafting-log";
import { Logs_Gathering_Log } from "./gathering-log";
import { Logs_Orchestrion_List } from "./orchestrion-list";

export const Logs = function(parent) {
    return new DataGroup("Logs", parent).initializeSubGroups([
        Logs_Hunting_Log,
        Logs_Sightseeing_Log,
        Logs_Crafting_Log,
        Logs_Gathering_Log,
        Logs_Orchestrion_List,
    ]);
};
