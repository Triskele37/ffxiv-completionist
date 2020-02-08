import { DataGroup } from "../../../DataGroup";
import { FishingLogColumnConfig } from "../../columnConfigs";

import { Gathering_Log_Spearfishing_Log_Gyr_Abania } from "./gyr-abania";
import { Gathering_Log_Spearfishing_Log_Othard } from "./othard";
import { Gathering_Log_Spearfishing_Log_Norvrandt } from "./norvrandt";

export const Gathering_Log_Spearfishing_Log = function(parent) {
    const data = new DataGroup("Log", parent);
    data.columnConfig = FishingLogColumnConfig;

    data.initializeSubGroups([
        Gathering_Log_Spearfishing_Log_Gyr_Abania,
        Gathering_Log_Spearfishing_Log_Othard,
        Gathering_Log_Spearfishing_Log_Norvrandt,
    ]);

    return data;
};
