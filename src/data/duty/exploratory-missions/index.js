import { DataGroup } from "../../DataGroup";

import { Duty_Exploratory_Missions_Eureka } from "./eureka";
import { Duty_Exploratory_Missions_Bozja } from "./bozja";

export const Duty_Exploratory_Missions = function(parent) {
    const group = DataGroup.fromJSON(parent, "./duty/exploratory-missions/index");

    group.initializeSubGroups([
        Duty_Exploratory_Missions_Eureka(group),
        Duty_Exploratory_Missions_Bozja(group)
    ]);

    return group;
};
