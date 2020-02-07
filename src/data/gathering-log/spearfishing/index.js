import { DataGroup } from "../../DataGroup";

import { Gathering_Log_Spearfishing_Log } from "./log";
import { Gathering_Log_Spearfishing_Guide } from "./guide";

export const Gathering_Log_Spearfishing = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Gathering_Log_Spearfishing_Log,
        Gathering_Log_Spearfishing_Guide,
    ]);
};
