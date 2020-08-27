import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quest/main-scenario-past/post-stormblood-main-scenario-quests/post-ala-mhigan-liberation";

export const Quests_Main_Scenario_Post_Stormblood = function(parent) {
    return new DataGroup("Post-Stormblood", parent).initializeTasks(tasks);
};
