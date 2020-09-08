import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Coerthan_Coerthas_Central_Highlands } from "./coerthas-central-highlands";
import { Quests_Sidequests_Coerthan_Coerthas_Western_Highlands } from "./coerthas-western-highlands";

export const Quests_Sidequests_Coerthan = function(parent) {
    const data = new DataGroup("Coerthan", parent);
    data.name_fr = "Coerthas";

    data.initializeSubGroups([
        Quests_Sidequests_Coerthan_Coerthas_Central_Highlands,
        Quests_Sidequests_Coerthan_Coerthas_Western_Highlands,
    ]);

    return data;
};
