import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Othardian_The_Ruby_Sea } from "./the-ruby-sea";
import { Duty_Quests_Sidequests_Othardian_Yanxia } from "./yanxia";
import { Duty_Quests_Sidequests_Othardian_The_Azim_Steppe } from "./the-azim-steppe";

export const Duty_Quests_Sidequests_Othardian = function(parent) {
    const data = new DataGroup("Othardian", parent);
    data.name_fr = "Othard";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Othardian_The_Ruby_Sea,
        Duty_Quests_Sidequests_Othardian_Yanxia,
        Duty_Quests_Sidequests_Othardian_The_Azim_Steppe,
    ]);

    return data;
};
