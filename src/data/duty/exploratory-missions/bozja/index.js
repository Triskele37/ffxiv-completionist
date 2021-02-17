import { DataGroup } from "../../../DataGroup";

import { Duty_Exploratory_Missions_Bozja_Resistance_Rank } from "./resistance-rank";
import { Duty_Exploratory_Missions_Bozja_Aetherytes } from "./aetherytes";
import { Duty_Exploratory_Missions_Bozja_Events } from "./events";
import { Duty_Exploratory_Missions_Bozja_Lost_Actions } from "./lost-actions";
import { Duty_Exploratory_Missions_Bozja_Duties } from "./duties";

export const Duty_Exploratory_Missions_Bozja = function(parent) {
    const data = new DataGroup("The Bozjan Southern Front", parent);

    data.initializeSubGroups([
        Duty_Exploratory_Missions_Bozja_Resistance_Rank,
        Duty_Exploratory_Missions_Bozja_Aetherytes,
        Duty_Exploratory_Missions_Bozja_Events,
        Duty_Exploratory_Missions_Bozja_Lost_Actions,
        Duty_Exploratory_Missions_Bozja_Duties,
    ]);

    return data;
};
