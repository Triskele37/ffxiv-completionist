import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Amh_Araeng_Amh_Araeng } from "./amh-araeng";

export const Quests_Sidequests_Amh_Araeng = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Sidequests_Amh_Araeng_Amh_Araeng
    ]);
};
