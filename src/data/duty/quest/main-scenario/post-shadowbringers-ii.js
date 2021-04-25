import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/main-scenario-shadowbringers/post-shadowbringers-main-scenario-quests-ii/dark-reprise";

export const Duty_Quests_Main_Scenario_Post_Shadowbringers_II = function(parent) {
    const data = new DataGroup("Post-Shadowbringers II", parent).initializeTasks(tasks);
    data.name_fr = "Le Retour des Héritiers II";

    data.columnConfig = parent.columnConfig.concat(
        { header: "Patch", key: "Patch", filterable: true }
    );

    return data;
};
