import { DataGroup } from "../../../../DataGroup";

import { Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Restoration_1 } from "./restoration-1";
import { Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Restoration_2 } from "./restoration-2";
import { Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Restoration_3 } from "./restoration-3";
import { Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Restoration_4 } from "./restoration-4";
import { Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Skysteel_Tools } from "./skysteel-tools";
import { Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Other } from "./other";

export const Logs_Crafting_Log_Blacksmith_Ishgard_Restoration = function(parent) {
    return new DataGroup("Ishgard Restoration", parent).initializeSubGroups([
        Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Restoration_1,
        Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Restoration_2,
        Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Restoration_3,
        Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Restoration_4,
        Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Skysteel_Tools,
        Logs_Crafting_Log_Blacksmith_Ishgard_Restoration_Other,
    ]);
};
