import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Gridanian_Gridania } from "./gridania";
import { Quests_Sidequests_Gridanian_Central_Shroud } from "./central-shroud";
import { Quests_Sidequests_Gridanian_East_Shroud } from "./east-shroud";
import { Quests_Sidequests_Gridanian_South_Shroud } from "./south-shroud";
import { Quests_Sidequests_Gridanian_North_Shroud } from "./north-shroud";

export const Quests_Sidequests_Gridanian = function(parent) {
    const data = new DataGroup("Gridanian", parent);
    data.name_fr = "Sombrelinceul";

    data.initializeSubGroups([
        Quests_Sidequests_Gridanian_Gridania,
        Quests_Sidequests_Gridanian_Central_Shroud,
        Quests_Sidequests_Gridanian_East_Shroud,
        Quests_Sidequests_Gridanian_South_Shroud,
        Quests_Sidequests_Gridanian_North_Shroud,
    ]);

    return data;
};
