import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/main-scenario-past/stormblood-main-scenario-quests/stormblood";

export const Duty_Quests_Main_Scenario_Stormblood = function(parent) {
    const data = new DataGroup("Stormblood", parent);
    data.name_fr = "Récits d'une Tempête de Sang";

    data.initializeTasks(tasks);

    return data;
};
