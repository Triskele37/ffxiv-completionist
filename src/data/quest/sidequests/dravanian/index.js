import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Dravanian_Matoyas_Cave } from "./matoyas-cave";
import { Quests_Sidequests_Dravanian_Idyllshire } from "./idyllshire";
import { Quests_Sidequests_Dravanian_The_Dravanian_Forelands } from "./the-dravanian-forelands";
import { Quests_Sidequests_Dravanian_The_Dravanian_Hinterlands } from "./the-dravanian-hinterlands";
import { Quests_Sidequests_Dravanian_The_Churning_Mists } from "./the-churning-mists";

export const Quests_Sidequests_Dravanian = function(parent) {
    return new DataGroup("Dravanian", parent).initializeSubGroups([
        Quests_Sidequests_Dravanian_Matoyas_Cave,
        Quests_Sidequests_Dravanian_Idyllshire,
        Quests_Sidequests_Dravanian_The_Dravanian_Forelands,
        Quests_Sidequests_Dravanian_The_Dravanian_Hinterlands,
        Quests_Sidequests_Dravanian_The_Churning_Mists,
    ]);
};
