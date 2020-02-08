import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Hingan_Kugane } from "./kugane";

export const Quests_Sidequests_Hingan = function(parent) {
    return new DataGroup("Hingan", parent).initializeSubGroups([
        Quests_Sidequests_Hingan_Kugane,
    ]);
};
