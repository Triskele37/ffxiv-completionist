import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quests/main-scenario-past/post-dragonsong-main-scenario-quests/post-dragonsong-war";

export const Quests_Main_Scenario_Post_Dragonsong = function(parent) {
    const data = new DataGroup("Post-Dragonsong", parent).initializeTasks(tasks);
    data.columnConfig = parent.columnConfig.concat(
        { header: "Patch", key: "patch", filterable: true }
    );
    return data;
};
