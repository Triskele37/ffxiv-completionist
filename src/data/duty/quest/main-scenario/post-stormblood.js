import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../resources/en/duty/quest/main-scenario-past/post-stormblood-main-scenario-quests/post-ala-mhigan-liberation";

export const Duty_Quests_Main_Scenario_Post_Stormblood = function(parent) {
    const data = new DataGroup("Post-Stormblood", parent);
    data.name_fr = "Après la Tempête de Sang";

    data.initializeTasks(tasks);

    return data;
};
