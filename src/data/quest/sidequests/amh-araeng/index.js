import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Amh_Araeng_Amh_Araeng } from "./amh-araeng";

export const Quests_Sidequests_Amh_Araeng = function(parent) {
    return new DataGroup("Amh Araeng", parent).initializeSubGroups([
        Quests_Sidequests_Amh_Araeng_Amh_Araeng
    ]);
};
