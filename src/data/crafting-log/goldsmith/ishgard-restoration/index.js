import { DataGroup } from "../../../DataGroup";

import { Crafting_Log_Goldsmith_Ishgard_Restoration_Restoration } from "./restoration";
import { Crafting_Log_Goldsmith_Ishgard_Restoration_Other } from "./other";

export const Crafting_Log_Goldsmith_Ishgard_Restoration = function(parent) {
    return new DataGroup("Ishgard Restoration", parent).initializeSubGroups([
        Crafting_Log_Goldsmith_Ishgard_Restoration_Restoration,
        Crafting_Log_Goldsmith_Ishgard_Restoration_Other,
    ]);
};
