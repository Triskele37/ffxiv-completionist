import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/main-scenario-past/seventh-umbral-era-main-scenario-quests/gridania";

export const Duty_Quests_Main_Scenario_Seventh_Umbral_Era_Gridania = function(parent) {
    return new DataGroup("Gridania", parent).initializeTasks(tasks);
};
