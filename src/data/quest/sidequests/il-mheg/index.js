import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Il_Mheg_Il_Mheg } from "./il-mheg";

export const Quests_Sidequests_Il_Mheg = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Sidequests_Il_Mheg_Il_Mheg,
    ]);
};
