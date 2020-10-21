import { DataGroup } from "../../../DataGroup";

import { Crafting_Log_Alchemist_Ishgard_Restoration_Restoration_1 } from "./restoration-1";
import { Crafting_Log_Alchemist_Ishgard_Restoration_Restoration_2 } from "./restoration-2";
import { Crafting_Log_Alchemist_Ishgard_Restoration_Restoration_3 } from "./restoration-3";
import { Crafting_Log_Alchemist_Ishgard_Restoration_Skysteel_Tools } from "./skysteel-tools";
import { Crafting_Log_Alchemist_Ishgard_Restoration_Other } from "./other";

export const Crafting_Log_Alchemist_Ishgard_Restoration = function(parent) {
    return new DataGroup("Ishgard Restoration", parent).initializeSubGroups([
        Crafting_Log_Alchemist_Ishgard_Restoration_Restoration_1,
        Crafting_Log_Alchemist_Ishgard_Restoration_Restoration_2,
        Crafting_Log_Alchemist_Ishgard_Restoration_Restoration_3,
        Crafting_Log_Alchemist_Ishgard_Restoration_Skysteel_Tools,
        Crafting_Log_Alchemist_Ishgard_Restoration_Other,
    ]);
};
