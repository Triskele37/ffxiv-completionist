import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Il_Mheg_Il_Mheg } from "./il-mheg";

export const Quests_Sidequests_Il_Mheg = function(parent) {
    return new DataGroup("Il Mheg", parent).initializeSubGroups([
        Quests_Sidequests_Il_Mheg_Il_Mheg,
    ]);
};
