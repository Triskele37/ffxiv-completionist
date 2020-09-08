import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Gyr_Abanian_Rhalgrs_Reach } from "./rhalgrs-reach";
import { Quests_Sidequests_Gyr_Abanian_The_Fringes } from "./the-fringes";
import { Quests_Sidequests_Gyr_Abanian_The_Peaks } from "./the-peaks";
import { Quests_Sidequests_Gyr_Abanian_The_Lochs } from "./the-lochs";

export const Quests_Sidequests_Gyr_Abanian = function(parent) {
    const data = new DataGroup("Gyr Abanian", parent);
    data.name_fr = "Gyr Abania";

    data.initializeSubGroups([
        Quests_Sidequests_Gyr_Abanian_Rhalgrs_Reach,
        Quests_Sidequests_Gyr_Abanian_The_Fringes,
        Quests_Sidequests_Gyr_Abanian_The_Peaks,
        Quests_Sidequests_Gyr_Abanian_The_Lochs,
    ]);

    return data;
};
