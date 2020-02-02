import { DataGroup } from "../../../DataGroup";

import { Crafting_Log_Shared_Custom_Deliveries_Zhloe_Aliapoh } from "./zhloe-aliapoh";
import { Crafting_Log_Shared_Custom_Deliveries_M_Naago } from "./m-naago";
import { Crafting_Log_Shared_Custom_Deliveries_Kurenai } from "./kurenai";
import { Crafting_Log_Shared_Custom_Deliveries_Adkiragh } from "./adkiragh";
import { Crafting_Log_Shared_Custom_Deliveries_Kai_Shirr } from "./kai-shirr";

export const Crafting_Log_Shared_Custom_Deliveries = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Log_Shared_Custom_Deliveries_Zhloe_Aliapoh,
        Crafting_Log_Shared_Custom_Deliveries_M_Naago,
        Crafting_Log_Shared_Custom_Deliveries_Kurenai,
        Crafting_Log_Shared_Custom_Deliveries_Adkiragh,
        Crafting_Log_Shared_Custom_Deliveries_Kai_Shirr,
    ]);
};
