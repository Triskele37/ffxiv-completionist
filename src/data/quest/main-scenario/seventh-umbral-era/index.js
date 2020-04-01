import { DataGroup } from "../../../DataGroup";
import { Quests_Main_Scenario_Seventh_Umbral_Era_Gridania } from "./gridania";
import { Quests_Main_Scenario_Seventh_Umbral_Era_Limsa_Lominsa } from "./limsa-lominsa";
import { Quests_Main_Scenario_Seventh_Umbral_Era_Ul_Dah } from "./ul-dah";

import all from "../../../../../static/quests/main-scenario-past/main-scenario-quests/seventh-umbral-era";
const tasks = all.filter((quest) => quest.Level >= 15);

export const Quests_Main_Scenario_Seventh_Umbral_Era = function(parent) {
    return new DataGroup("Seventh Umbral Era", parent).initializeSubGroups([
        Quests_Main_Scenario_Seventh_Umbral_Era_Gridania,
        Quests_Main_Scenario_Seventh_Umbral_Era_Limsa_Lominsa,
        Quests_Main_Scenario_Seventh_Umbral_Era_Ul_Dah,
    ]).initializeTasks(tasks);
};
