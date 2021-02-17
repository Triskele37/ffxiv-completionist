import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Ul_Dahn_Ul_Dah } from "./ul-dah";
import { Duty_Quests_Sidequests_Ul_Dahn_The_Waking_Sands } from "./the-waking-sands";
import { Duty_Quests_Sidequests_Ul_Dahn_Chocobo_Square } from "./chocobo-square";
import { Duty_Quests_Sidequests_Ul_Dahn_The_Gold_Saucer } from "./the-gold-saucer";
import { Duty_Quests_Sidequests_Ul_Dahn_Western_Thanalan } from "./western-thanalan";
import { Duty_Quests_Sidequests_Ul_Dahn_Central_Thanalan } from "./central-thanalan";
import { Duty_Quests_Sidequests_Ul_Dahn_Eastern_Thanalan } from "./eastern-thanalan";
import { Duty_Quests_Sidequests_Ul_Dahn_Southern_Thanalan } from "./southern-thanalan";
import { Duty_Quests_Sidequests_Ul_Dahn_Northern_Thanalan } from "./northern-thanalan";

export const Duty_Quests_Sidequests_Ul_Dahn = function(parent) {
    const data = new DataGroup("Ul'Dahn", parent);
    data.name_fr = "Thanalan";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Ul_Dahn_Ul_Dah,
        Duty_Quests_Sidequests_Ul_Dahn_The_Waking_Sands,
        Duty_Quests_Sidequests_Ul_Dahn_Chocobo_Square,
        Duty_Quests_Sidequests_Ul_Dahn_The_Gold_Saucer,
        Duty_Quests_Sidequests_Ul_Dahn_Western_Thanalan,
        Duty_Quests_Sidequests_Ul_Dahn_Central_Thanalan,
        Duty_Quests_Sidequests_Ul_Dahn_Eastern_Thanalan,
        Duty_Quests_Sidequests_Ul_Dahn_Southern_Thanalan,
        Duty_Quests_Sidequests_Ul_Dahn_Northern_Thanalan,
    ]);

    return data;
};
