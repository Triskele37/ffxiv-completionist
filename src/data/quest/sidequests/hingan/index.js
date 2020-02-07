import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Hingan_Kugane } from "./kugane";

export const Quests_Sidequests_Hingan = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Sidequests_Hingan_Kugane,
    ]);
};
