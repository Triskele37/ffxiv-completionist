import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quest/main-scenario-past/heavensward-main-scenario-quests/heavensward";

export const Quests_Main_Scenario_Heavensward = function(parent) {
    return new DataGroup("Heavensward", parent).initializeTasks(tasks);
};
