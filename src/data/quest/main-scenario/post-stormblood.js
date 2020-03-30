import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quests/main-scenario-past/post-stormblood-main-scenario-quests/post-ala-mhigan-liberation";

export const Quests_Main_Scenario_Post_Stormblood = function(parent) {
    const data = new DataGroup("Post-Stormblood", parent).initializeTasks(tasks);
    data.columnConfig = parent.columnConfig.concat(
        { header: "Patch", key: "patch", filterable: true }
    );
    return data;
};
