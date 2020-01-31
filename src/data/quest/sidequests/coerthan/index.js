import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Coerthan_Coerthas_Central_Highlands } from "./coerthas-central-highlands";
import { Quests_Sidequests_Coerthan_Coerthas_Western_Highlands } from "./coerthas-western-highlands";

export const Quests_Sidequests_Coerthan = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Sidequests_Coerthan_Coerthas_Central_Highlands,
        Quests_Sidequests_Coerthan_Coerthas_Western_Highlands,
    ]);
};
