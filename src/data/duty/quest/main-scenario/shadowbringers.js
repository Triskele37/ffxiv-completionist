import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/main-scenario-shadowbringers/shadowbringers-main-scenario-quests/shadowbringers";

export const Duty_Quests_Main_Scenario_Shadowbringers = function(parent) {
    const data = new DataGroup("Shadowbringers", parent);
    data.name_fr = "Chroniques des Ténèbres";

    data.initializeTasks(tasks);

    return data;
};
