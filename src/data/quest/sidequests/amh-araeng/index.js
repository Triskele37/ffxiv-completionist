import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Amh_Araeng_Amh_Araeng } from "./amh-araeng";

export const Quests_Sidequests_Amh_Araeng = function(parent) {
    const data = new DataGroup("Amh Araeng", parent);
    data.name_fr = "Amh Araeng";

    data.initializeSubGroups([
        Quests_Sidequests_Amh_Araeng_Amh_Araeng
    ]);

    return data;
};
