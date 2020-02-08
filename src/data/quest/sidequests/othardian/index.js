import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Othardian_The_Ruby_Sea } from "./the-ruby-sea";
import { Quests_Sidequests_Othardian_Yanxia } from "./yanxia";
import { Quests_Sidequests_Othardian_The_Azim_Steppe } from "./the-azim-steppe";

export const Quests_Sidequests_Othardian = function(parent) {
    return new DataGroup("Othardian", parent).initializeSubGroups([
        Quests_Sidequests_Othardian_The_Ruby_Sea,
        Quests_Sidequests_Othardian_Yanxia,
        Quests_Sidequests_Othardian_The_Azim_Steppe,
    ]);
};
