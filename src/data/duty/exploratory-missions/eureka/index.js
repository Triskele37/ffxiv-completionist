import { DataGroup } from "../../../DataGroup";

import { Duty_Exploratory_Missions_Eureka_Elemental_Level } from "./elemental-level";
import { Duty_Exploratory_Missions_Eureka_Aetherytes } from "./aetherytes";
import { Duty_Exploratory_Missions_Eureka_Notorious_Monsters } from "./notorious-monsters";
import { Duty_Exploratory_Missions_Eureka_Logos_Actions } from "./logos-actions"
import { Duty_Exploratory_Missions_Eureka_Duties } from "./duties";

export const Duty_Exploratory_Missions_Eureka = function(parent) {
    const data = new DataGroup("The Forbidden Land, Eureka", parent);

    data.initializeSubGroups([
        Duty_Exploratory_Missions_Eureka_Elemental_Level,
        Duty_Exploratory_Missions_Eureka_Aetherytes,
        Duty_Exploratory_Missions_Eureka_Notorious_Monsters,
        Duty_Exploratory_Missions_Eureka_Logos_Actions,
        Duty_Exploratory_Missions_Eureka_Duties,
    ]);

    return data;
};
