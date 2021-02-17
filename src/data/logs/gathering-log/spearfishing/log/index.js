import { DataGroup } from "../../../../DataGroup";
import { FishingLogColumnConfig } from "../../columnConfigs";

import { Logs_Gathering_Log_Spearfishing_Log_Gyr_Abania } from "./gyr-abania";
import { Logs_Gathering_Log_Spearfishing_Log_Othard } from "./othard";
import { Logs_Gathering_Log_Spearfishing_Log_Norvrandt } from "./norvrandt";

export const Logs_Gathering_Log_Spearfishing_Log = function(parent) {
    const data = new DataGroup("Log", parent);
    data.columnConfig = FishingLogColumnConfig;

    data.initializeSubGroups([
        Logs_Gathering_Log_Spearfishing_Log_Gyr_Abania,
        Logs_Gathering_Log_Spearfishing_Log_Othard,
        Logs_Gathering_Log_Spearfishing_Log_Norvrandt,
    ]);

    return data;
};
