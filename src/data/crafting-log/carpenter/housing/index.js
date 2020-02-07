import { DataGroup } from "../../../DataGroup";

import { Crafting_Log_Carpenter_Housing_Housing_1 } from "./housing-1";
import { Crafting_Log_Carpenter_Housing_Housing_2 } from "./housing-2";

export const Crafting_Log_Carpenter_Housing = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Log_Carpenter_Housing_Housing_1,
        Crafting_Log_Carpenter_Housing_Housing_2,
    ]);
};
