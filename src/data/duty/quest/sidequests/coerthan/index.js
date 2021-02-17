import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Coerthan_Coerthas_Central_Highlands } from "./coerthas-central-highlands";
import { Duty_Quests_Sidequests_Coerthan_Coerthas_Western_Highlands } from "./coerthas-western-highlands";

export const Duty_Quests_Sidequests_Coerthan = function(parent) {
    const data = new DataGroup("Coerthan", parent);
    data.name_fr = "Coerthas";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Coerthan_Coerthas_Central_Highlands,
        Duty_Quests_Sidequests_Coerthan_Coerthas_Western_Highlands,
    ]);

    return data;
};
