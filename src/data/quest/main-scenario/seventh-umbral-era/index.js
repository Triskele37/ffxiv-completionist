import { DataGroup } from "../../../DataGroup";
import { Quests_Main_Scenario_Seventh_Umbral_Era_Gridania } from "./gridania";
import { Quests_Main_Scenario_Seventh_Umbral_Era_Limsa_Lominsa } from "./limsa-lominsa";
import { Quests_Main_Scenario_Seventh_Umbral_Era_Ul_Dah } from "./ul-dah";

import tasks from "../../../../../static/quest/main-scenario-past/seventh-umbral-era-main-scenario-quests/seventh-umbral-era";

export const Quests_Main_Scenario_Seventh_Umbral_Era = function(parent) {
    const data = new DataGroup("Seventh Umbral Era", parent);
    data.name_fr = "Chroniques 7e ère ombrale";

    data.initializeSubGroups([
        Quests_Main_Scenario_Seventh_Umbral_Era_Gridania,
        Quests_Main_Scenario_Seventh_Umbral_Era_Limsa_Lominsa,
        Quests_Main_Scenario_Seventh_Umbral_Era_Ul_Dah,
    ]);

    data.initializeTasks(tasks);

    return data;
};
