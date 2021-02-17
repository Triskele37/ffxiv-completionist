import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Gyr_Abanian_Rhalgrs_Reach } from "./rhalgrs-reach";
import { Duty_Quests_Sidequests_Gyr_Abanian_The_Fringes } from "./the-fringes";
import { Duty_Quests_Sidequests_Gyr_Abanian_The_Peaks } from "./the-peaks";
import { Duty_Quests_Sidequests_Gyr_Abanian_The_Lochs } from "./the-lochs";

export const Duty_Quests_Sidequests_Gyr_Abanian = function(parent) {
    const data = new DataGroup("Gyr Abanian", parent);
    data.name_fr = "Gyr Abania";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Gyr_Abanian_Rhalgrs_Reach,
        Duty_Quests_Sidequests_Gyr_Abanian_The_Fringes,
        Duty_Quests_Sidequests_Gyr_Abanian_The_Peaks,
        Duty_Quests_Sidequests_Gyr_Abanian_The_Lochs,
    ]);

    return data;
};
