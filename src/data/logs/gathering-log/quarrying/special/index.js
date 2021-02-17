import { DataGroup } from "../../../../DataGroup";

import { Logs_Gathering_Log_Quarrying_Special_Coerthan_Folklore } from "./coerthan-folklore";
import { Logs_Gathering_Log_Quarrying_Special_Dravanian_Folklore } from "./dravanian-folklore";
import { Logs_Gathering_Log_Quarrying_Special_Abalathian_Folklore } from "./abalathian-folklore";
import { Logs_Gathering_Log_Quarrying_Special_Vrandtic_Folklore } from "./vrandtic-folklore";
import { Logs_Gathering_Log_Quarrying_Special_Ishgard_Restoration } from "./ishgard-restoration";
import { Logs_Gathering_Log_Quarrying_Special_Skysteel_Tools } from "./skysteel-tools";
import { Logs_Gathering_Log_Quarrying_Special_Collectables_1 } from "./collectables-1";
import { Logs_Gathering_Log_Quarrying_Special_Collectables_2 } from "./collectables-2";

export const Logs_Gathering_Log_Quarrying_Special = function(parent) {
    return new DataGroup("Special", parent).initializeSubGroups([
        Logs_Gathering_Log_Quarrying_Special_Coerthan_Folklore,
        Logs_Gathering_Log_Quarrying_Special_Dravanian_Folklore,
        Logs_Gathering_Log_Quarrying_Special_Abalathian_Folklore,
        Logs_Gathering_Log_Quarrying_Special_Vrandtic_Folklore,
        Logs_Gathering_Log_Quarrying_Special_Ishgard_Restoration,
        Logs_Gathering_Log_Quarrying_Special_Skysteel_Tools,
        Logs_Gathering_Log_Quarrying_Special_Collectables_1,
        Logs_Gathering_Log_Quarrying_Special_Collectables_2,
	]);
};
