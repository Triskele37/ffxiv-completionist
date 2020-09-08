import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Il_Mheg_Il_Mheg } from "./il-mheg";

export const Quests_Sidequests_Il_Mheg = function(parent) {
    const data = new DataGroup("Il Mheg", parent);
    data.name_fr = "Il Mheg";

    data.initializeSubGroups([
        Quests_Sidequests_Il_Mheg_Il_Mheg,
    ]);

    return data;
};
