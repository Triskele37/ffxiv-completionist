import { DataGroup } from "../../../DataGroup";

import { Gathering_Log_Quarrying_Special_Coerthan_Folklore } from "./coerthan-folklore";
import { Gathering_Log_Quarrying_Special_Dravanian_Folklore } from "./dravanian-folklore";
import { Gathering_Log_Quarrying_Special_Abalathian_Folklore } from "./abalathian-folklore";
import { Gathering_Log_Quarrying_Special_Ishgard_Restoration } from "./ishgard-restoration";

export const Gathering_Log_Quarrying_Special = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Gathering_Log_Quarrying_Special_Coerthan_Folklore,
        Gathering_Log_Quarrying_Special_Dravanian_Folklore,
        Gathering_Log_Quarrying_Special_Abalathian_Folklore,
        Gathering_Log_Quarrying_Special_Ishgard_Restoration,
	]);
};
