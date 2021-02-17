import { DataGroup } from "../../../../DataGroup";

import { Logs_Crafting_Log_Carpenter_Housing_Housing_1 } from "./housing-1";
import { Logs_Crafting_Log_Carpenter_Housing_Housing_2 } from "./housing-2";

export const Logs_Crafting_Log_Carpenter_Housing = function(parent) {
    return new DataGroup("Housing", parent).initializeSubGroups([
        Logs_Crafting_Log_Carpenter_Housing_Housing_1,
        Logs_Crafting_Log_Carpenter_Housing_Housing_2,
    ]);
};
