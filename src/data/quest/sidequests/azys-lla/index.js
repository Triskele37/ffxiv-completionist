import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Azys_Lla_Azys_Lla } from "./azys-lla";

export const Quests_Sidequests_Azys_Lla = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Sidequests_Azys_Lla_Azys_Lla,
    ]);
};
