import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Gridanian_Gridania } from "./gridania";
import { Duty_Quests_Sidequests_Gridanian_Central_Shroud } from "./central-shroud";
import { Duty_Quests_Sidequests_Gridanian_East_Shroud } from "./east-shroud";
import { Duty_Quests_Sidequests_Gridanian_South_Shroud } from "./south-shroud";
import { Duty_Quests_Sidequests_Gridanian_North_Shroud } from "./north-shroud";

export const Duty_Quests_Sidequests_Gridanian = function(parent) {
    const data = new DataGroup("Gridanian", parent);
    data.name_fr = "Sombrelinceul";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Gridanian_Gridania,
        Duty_Quests_Sidequests_Gridanian_Central_Shroud,
        Duty_Quests_Sidequests_Gridanian_East_Shroud,
        Duty_Quests_Sidequests_Gridanian_South_Shroud,
        Duty_Quests_Sidequests_Gridanian_North_Shroud,
    ]);

    return data;
};
