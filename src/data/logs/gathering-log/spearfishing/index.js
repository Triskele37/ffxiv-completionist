import { DataGroup } from "../../../DataGroup";

import { Logs_Gathering_Log_Spearfishing_Log } from "./log";
import { Logs_Gathering_Log_Spearfishing_Guide } from "./guide";

export const Logs_Gathering_Log_Spearfishing = function(parent) {
    return new DataGroup("Spearfishing", parent).initializeSubGroups([
        Logs_Gathering_Log_Spearfishing_Log,
        Logs_Gathering_Log_Spearfishing_Guide,
    ]);
};
