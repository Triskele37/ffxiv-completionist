import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Ul_Dahn_Ul_Dah } from "./ul-dah";
import { Quests_Sidequests_Ul_Dahn_The_Waking_Sands } from "./the-waking-sands";
import { Quests_Sidequests_Ul_Dahn_Chocobo_Square } from "./chocobo-square";
import { Quests_Sidequests_Ul_Dahn_The_Gold_Saucer } from "./the-gold-saucer";
import { Quests_Sidequests_Ul_Dahn_Western_Thanalan } from "./western-thanalan";
import { Quests_Sidequests_Ul_Dahn_Central_Thanalan } from "./central-thanalan";
import { Quests_Sidequests_Ul_Dahn_Eastern_Thanalan } from "./eastern-thanalan";
import { Quests_Sidequests_Ul_Dahn_Southern_Thanalan } from "./southern-thanalan";
import { Quests_Sidequests_Ul_Dahn_Northern_Thanalan } from "./northern-thanalan";

export const Quests_Sidequests_Ul_Dahn = function(parent) {
    const data = new DataGroup("Ul'Dahn", parent);
    data.name_fr = "Thanalan";

    data.initializeSubGroups([
        Quests_Sidequests_Ul_Dahn_Ul_Dah,
        Quests_Sidequests_Ul_Dahn_The_Waking_Sands,
        Quests_Sidequests_Ul_Dahn_Chocobo_Square,
        Quests_Sidequests_Ul_Dahn_The_Gold_Saucer,
        Quests_Sidequests_Ul_Dahn_Western_Thanalan,
        Quests_Sidequests_Ul_Dahn_Central_Thanalan,
        Quests_Sidequests_Ul_Dahn_Eastern_Thanalan,
        Quests_Sidequests_Ul_Dahn_Southern_Thanalan,
        Quests_Sidequests_Ul_Dahn_Northern_Thanalan,
    ]);

    return data;
};
