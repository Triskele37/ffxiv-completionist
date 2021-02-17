import { DataGroup } from "../../../../DataGroup";

import { Logs_Crafting_Log_Shared_Custom_Deliveries_Zhloe_Aliapoh } from "./zhloe-aliapoh";
import { Logs_Crafting_Log_Shared_Custom_Deliveries_M_Naago } from "./m-naago";
import { Logs_Crafting_Log_Shared_Custom_Deliveries_Kurenai } from "./kurenai";
import { Logs_Crafting_Log_Shared_Custom_Deliveries_Adkiragh } from "./adkiragh";
import { Logs_Crafting_Log_Shared_Custom_Deliveries_Kai_Shirr } from "./kai-shirr";
import { Logs_Crafting_Log_Shared_Custom_Deliveries_Ehll_Tou } from "./ehll-tou";

export const Logs_Crafting_Log_Shared_Custom_Deliveries = function(parent) {
    return new DataGroup("Custom Deliveries", parent).initializeSubGroups([
        Logs_Crafting_Log_Shared_Custom_Deliveries_Zhloe_Aliapoh,
        Logs_Crafting_Log_Shared_Custom_Deliveries_M_Naago,
        Logs_Crafting_Log_Shared_Custom_Deliveries_Kurenai,
        Logs_Crafting_Log_Shared_Custom_Deliveries_Adkiragh,
        Logs_Crafting_Log_Shared_Custom_Deliveries_Kai_Shirr,
        Logs_Crafting_Log_Shared_Custom_Deliveries_Ehll_Tou,
    ]);
};
