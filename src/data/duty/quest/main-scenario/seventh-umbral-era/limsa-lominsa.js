import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/main-scenario-past/seventh-umbral-era-main-scenario-quests/limsa-lominsa";

export const Duty_Quests_Main_Scenario_Seventh_Umbral_Era_Limsa_Lominsa = function(parent) {
    return new DataGroup("Limsa Lominsa", parent).initializeTasks(tasks);
};
