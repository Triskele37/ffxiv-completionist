import { DataGroup } from "../../../../DataGroup";
import { Duty_Quests_Main_Scenario_Seventh_Umbral_Era_Gridania } from "./gridania";
import { Duty_Quests_Main_Scenario_Seventh_Umbral_Era_Limsa_Lominsa } from "./limsa-lominsa";
import { Duty_Quests_Main_Scenario_Seventh_Umbral_Era_Ul_Dah } from "./ul-dah";

import tasks from "../../../../../../resources/en/duty/quest/main-scenario-past/seventh-umbral-era-main-scenario-quests/seventh-umbral-era";

export const Duty_Quests_Main_Scenario_Seventh_Umbral_Era = function(parent) {
    const data = new DataGroup("Seventh Umbral Era", parent);
    data.name_fr = "Chroniques 7e ère ombrale";

    data.initializeSubGroups([
        Duty_Quests_Main_Scenario_Seventh_Umbral_Era_Gridania,
        Duty_Quests_Main_Scenario_Seventh_Umbral_Era_Limsa_Lominsa,
        Duty_Quests_Main_Scenario_Seventh_Umbral_Era_Ul_Dah,
    ]);

    data.initializeTasks(tasks);

    return data;
};
