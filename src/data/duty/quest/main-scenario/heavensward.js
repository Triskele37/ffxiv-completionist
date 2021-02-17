import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/main-scenario-past/heavensward-main-scenario-quests/heavensward";

export const Duty_Quests_Main_Scenario_Heavensward = function(parent) {
    const data = new DataGroup("Heavensward", parent);
    data.name_fr = "Chroniques Ishgardaises";

    data.initializeTasks(tasks);

    return data;
};
