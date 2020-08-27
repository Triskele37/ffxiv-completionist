import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quest/main-scenario-shadowbringers/shadowbringers-main-scenario-quests/shadowbringers";

export const Quests_Main_Scenario_Shadowbringers = function(parent) {
    return new DataGroup("Shadowbringers", parent).initializeTasks(tasks);
};
