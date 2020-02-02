import { DataGroup } from "../../../DataGroup";

import { Crafting_Log_Weaver_Ishgard_Restoration_Restoration } from "./restoration";
import { Crafting_Log_Weaver_Ishgard_Restoration_Other } from "./other";

export const Crafting_Log_Weaver_Ishgard_Restoration = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Log_Weaver_Ishgard_Restoration_Restoration,
        Crafting_Log_Weaver_Ishgard_Restoration_Other,
    ]);
};
