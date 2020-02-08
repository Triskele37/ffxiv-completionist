import { DataGroup } from "../../../DataGroup";

import { Gathering_Log_Logging_Special_Dravanian_Folklore } from "./dravanian-folklore";
import { Gathering_Log_Logging_Special_Abalathian_Folklore } from "./abalathian-folklore";
import { Gathering_Log_Logging_Special_Gyr_Abanian_Folklore } from "./gyr-abanian-folklore";
import { Gathering_Log_Logging_Special_Vrandtic_Folklore } from "./vrandtic-folklore";
import { Gathering_Log_Logging_Special_Ishgard_Restoration } from "./ishgard-restoration";

export const Gathering_Log_Logging_Special = function(parent) {
    return new DataGroup("Special", parent).initializeSubGroups([
        Gathering_Log_Logging_Special_Dravanian_Folklore,
        Gathering_Log_Logging_Special_Abalathian_Folklore,
        Gathering_Log_Logging_Special_Gyr_Abanian_Folklore,
        Gathering_Log_Logging_Special_Vrandtic_Folklore,
        Gathering_Log_Logging_Special_Ishgard_Restoration,
	]);
};
