import { DataGroup } from "../../../../DataGroup";
import { FishingGuideColumnConfig } from "../../columnConfigs";

import { Logs_Gathering_Log_Spearfishing_Guide_Page_1 } from "./page-1";
import { Logs_Gathering_Log_Spearfishing_Guide_Page_2 } from "./page-2";
import { Logs_Gathering_Log_Spearfishing_Guide_Page_3 } from "./page-3";
import { Logs_Gathering_Log_Spearfishing_Guide_Page_4 } from "./page-4";
import { Logs_Gathering_Log_Spearfishing_Guide_Page_5 } from "./page-5";
import { Logs_Gathering_Log_Spearfishing_Guide_Page_6 } from "./page-6";
import { Logs_Gathering_Log_Spearfishing_Guide_Page_7 } from "./page-7";

export const Logs_Gathering_Log_Spearfishing_Guide = function(parent) {
    const data = new DataGroup("Guide", parent);
    data.columnConfig = FishingGuideColumnConfig;

    data.initializeSubGroups([
        Logs_Gathering_Log_Spearfishing_Guide_Page_1,
        Logs_Gathering_Log_Spearfishing_Guide_Page_2,
        Logs_Gathering_Log_Spearfishing_Guide_Page_3,
        Logs_Gathering_Log_Spearfishing_Guide_Page_4,
        Logs_Gathering_Log_Spearfishing_Guide_Page_5,
        Logs_Gathering_Log_Spearfishing_Guide_Page_6,
        Logs_Gathering_Log_Spearfishing_Guide_Page_7,
    ]);

    return data;
};
