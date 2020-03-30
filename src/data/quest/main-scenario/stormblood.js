import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quests/main-scenario-past/stormblood-main-scenario-quests/stormblood";

export const Quests_Main_Scenario_Stormblood = function(parent) {
    return new DataGroup("Stormblood", parent).initializeTasks(tasks);
};
