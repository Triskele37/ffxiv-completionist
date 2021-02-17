import { DataGroup } from "../../DataGroup";

import { Duty_Exploratory_Missions_Eureka } from "./eureka";
import { Duty_Exploratory_Missions_Bozja } from "./bozja";

export const Duty_Exploratory_Missions = function(parent) {
    const data = new DataGroup("Exploratory Missions", parent);

    data.initializeSubGroups([
        Duty_Exploratory_Missions_Eureka,
        Duty_Exploratory_Missions_Bozja
    ]);

    return data;
};
