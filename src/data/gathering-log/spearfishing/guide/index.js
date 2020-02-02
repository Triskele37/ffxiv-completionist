import { DataGroup } from "../../../DataGroup";
import { FishingGuideColumnConfig } from "../../columnConfigs";

import { Gathering_Log_Spearfishing_Guide_Page_1 } from "./page-1";
import { Gathering_Log_Spearfishing_Guide_Page_2 } from "./page-2";
import { Gathering_Log_Spearfishing_Guide_Page_3 } from "./page-3";
import { Gathering_Log_Spearfishing_Guide_Page_4 } from "./page-4";
import { Gathering_Log_Spearfishing_Guide_Page_5 } from "./page-5";
import { Gathering_Log_Spearfishing_Guide_Page_6 } from "./page-6";
import { Gathering_Log_Spearfishing_Guide_Page_7 } from "./page-7";

export const Gathering_Log_Spearfishing_Guide = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.columnConfig = FishingGuideColumnConfig;

    data.initializeSubGroups([
        Gathering_Log_Spearfishing_Guide_Page_1,
        Gathering_Log_Spearfishing_Guide_Page_2,
        Gathering_Log_Spearfishing_Guide_Page_3,
        Gathering_Log_Spearfishing_Guide_Page_4,
        Gathering_Log_Spearfishing_Guide_Page_5,
        Gathering_Log_Spearfishing_Guide_Page_6,
        Gathering_Log_Spearfishing_Guide_Page_7,
    ]);

    return data;
};
