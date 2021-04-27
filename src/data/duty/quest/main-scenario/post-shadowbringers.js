import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../resources/en/duty/quest/main-scenario-shadowbringers/post-shadowbringers-main-scenario-quests/the-voyage-home";

export const Duty_Quests_Main_Scenario_Post_Shadowbringers = function(parent) {
    const data = new DataGroup("Post-Shadowbringers", parent).initializeTasks(tasks);
    data.name_fr = "Le Retour des Héritiers";

    data.columnConfig = parent.columnConfig.concat(
        { header: "Patch", key: "Patch", filterable: true }
    );

    return data;
};
