import { DataGroup } from "../../../DataGroup";

import { Crafting_Logs_Culinarian_Housing_Housing_1 } from "./housing-1";
import { Crafting_Logs_Culinarian_Housing_Housing_2 } from "./housing-2";

export const Crafting_Logs_Culinarian_Housing = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Logs_Culinarian_Housing_Housing_1,
        Crafting_Logs_Culinarian_Housing_Housing_2,
    ]);
};
