import { DataGroup } from "../../../DataGroup";

import { Crafting_Logs_Blacksmith_Ishgard_Restoration_Restoration } from "./restoration";
import { Crafting_Logs_Blacksmith_Ishgard_Restoration_Other } from "./other";

export const Crafting_Logs_Blacksmith_Ishgard_Restoration = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Logs_Blacksmith_Ishgard_Restoration_Restoration,
        Crafting_Logs_Blacksmith_Ishgard_Restoration_Other,
    ]);
};
