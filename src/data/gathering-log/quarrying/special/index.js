import { DataGroup } from "../../../DataGroup";

import { Gathering_Logs_Quarrying_Special_Coerthan_Folklore } from "./coerthan-folklore";
import { Gathering_Logs_Quarrying_Special_Dravanian_Folklore } from "./dravanian-folklore";
import { Gathering_Logs_Quarrying_Special_Abalathian_Folklore } from "./abalathian-folklore";
import { Gathering_Logs_Quarrying_Special_Ishgard_Restoration_Folklore } from "./ishgard-restoration";

export const Gathering_Logs_Quarrying_Special = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Gathering_Logs_Quarrying_Special_Coerthan_Folklore,
        Gathering_Logs_Quarrying_Special_Dravanian_Folklore,
        Gathering_Logs_Quarrying_Special_Abalathian_Folklore,
        Gathering_Logs_Quarrying_Special_Ishgard_Restoration_Folklore,
	]);
};
