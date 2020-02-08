import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Azys_Lla_Azys_Lla } from "./azys-lla";

export const Quests_Sidequests_Azys_Lla = function(parent) {
    return new DataGroup("Azys Lla", parent).initializeSubGroups([
        Quests_Sidequests_Azys_Lla_Azys_Lla,
    ]);
};
