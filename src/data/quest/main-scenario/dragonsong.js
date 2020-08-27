import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quest/main-scenario-past/dragonsong-main-scenario-quests/dragonsong-war";

export const Quests_Main_Scenario_Dragonsong = function(parent) {
    return new DataGroup("Dragonsong", parent).initializeTasks(tasks);
};
