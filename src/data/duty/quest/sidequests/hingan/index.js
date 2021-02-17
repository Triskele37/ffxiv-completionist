import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Hingan_Kugane } from "./kugane";

export const Duty_Quests_Sidequests_Hingan = function(parent) {
    const data = new DataGroup("Hingan", parent);
    data.name_fr = "Kugane";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Hingan_Kugane,
    ]);

    return data;
};
