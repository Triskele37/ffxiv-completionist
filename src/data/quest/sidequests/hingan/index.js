import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Hingan_Kugane } from "./kugane";

export const Quests_Sidequests_Hingan = function(parent) {
    const data = new DataGroup("Hingan", parent);
    data.name_fr = "Kugane";

    data.initializeSubGroups([
        Quests_Sidequests_Hingan_Kugane,
    ]);

    return data;
};
