import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../resources/en/duty/quest/main-scenario-past/seventh-astral-era-main-scenario-quests/seventh-astral-era";

export const Duty_Quests_Main_Scenario_Seventh_Astral_Era = function(parent) {
    const data = new DataGroup("Seventh Astral Era", parent);
    data.name_fr = "Chroniques 7e ère astrale";

    data.initializeTasks(tasks);

    return data;
};
