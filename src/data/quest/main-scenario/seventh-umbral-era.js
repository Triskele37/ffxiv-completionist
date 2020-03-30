import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quests/main-scenario-past/main-scenario-quests/seventh-umbral-era";

export const Quests_Main_Scenario_Seventh_Umbral_Era = function(parent) {
    return new DataGroup("Seventh Umbral Era", parent).initializeTasks(tasks);
};
