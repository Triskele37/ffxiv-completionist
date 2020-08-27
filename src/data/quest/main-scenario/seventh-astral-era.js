import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quest/main-scenario-past/seventh-astral-era-main-scenario-quests/seventh-astral-era";

export const Quests_Main_Scenario_Seventh_Astral_Era = function(parent) {
    const data = new DataGroup("Seventh Astral Era", parent).initializeTasks(tasks);
    data.columnConfig = parent.columnConfig.concat(
        { header: "Patch", key: "patch", filterable: true }
    );
    return data;
};
