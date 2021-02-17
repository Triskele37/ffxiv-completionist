import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/main-scenario-past/post-dragonsong-main-scenario-quests/post-dragonsong-war";

export const Duty_Quests_Main_Scenario_Post_Dragonsong = function(parent) {
    return new DataGroup("Post-Dragonsong", parent).initializeTasks(tasks);
};
