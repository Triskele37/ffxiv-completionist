import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Dravanian_Matoyas_Cave } from "./matoyas-cave";
import { Duty_Quests_Sidequests_Dravanian_Idyllshire } from "./idyllshire";
import { Duty_Quests_Sidequests_Dravanian_The_Dravanian_Forelands } from "./the-dravanian-forelands";
import { Duty_Quests_Sidequests_Dravanian_The_Dravanian_Hinterlands } from "./the-dravanian-hinterlands";
import { Duty_Quests_Sidequests_Dravanian_The_Churning_Mists } from "./the-churning-mists";

export const Duty_Quests_Sidequests_Dravanian = function(parent) {
    const data = new DataGroup("Dravanian", parent);
    data.name_fr = "Dravania";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Dravanian_Matoyas_Cave,
        Duty_Quests_Sidequests_Dravanian_Idyllshire,
        Duty_Quests_Sidequests_Dravanian_The_Dravanian_Forelands,
        Duty_Quests_Sidequests_Dravanian_The_Dravanian_Hinterlands,
        Duty_Quests_Sidequests_Dravanian_The_Churning_Mists,
    ]);

    return data;
};
