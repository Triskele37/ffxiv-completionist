import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quests/main-scenario-past/dragonsong-main-scenario-quests/dragonsong-war";

export const Quests_Main_Scenario_Dragonsong = function(parent) {
    const data = new DataGroup("Dragonsong", parent).initializeTasks(tasks);
    data.columnConfig = parent.columnConfig.concat(
        { header: "Patch", key: "patch", filterable: true }
    );
    return data;
};
