import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Azys_Lla_Azys_Lla } from "./azys-lla";

export const Quests_Sidequests_Azys_Lla = function(parent) {
    const data = new DataGroup("Azys Lla", parent);
    // data.name_fr = "";

    data.initializeSubGroups([
        Quests_Sidequests_Azys_Lla_Azys_Lla,
    ]);

    return data;
};
