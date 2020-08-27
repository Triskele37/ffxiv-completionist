import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/main-scenario-past/seventh-umbral-era-main-scenario-quests/ul-dah";

export const Quests_Main_Scenario_Seventh_Umbral_Era_Ul_Dah = function(parent) {
    return new DataGroup("Ul'Dah", parent).initializeTasks(tasks);
};
