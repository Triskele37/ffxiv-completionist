import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Il_Mheg_Il_Mheg } from "./il-mheg";

export const Duty_Quests_Sidequests_Il_Mheg = function(parent) {
    const data = new DataGroup("Il Mheg", parent);
    data.name_fr = "Il Mheg";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Il_Mheg_Il_Mheg,
    ]);

    return data;
};
