import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quest/main-scenario-past/dragonsong-main-scenario-quests/dragonsong-war";

export const Quests_Main_Scenario_Dragonsong = function(parent) {
    const data = new DataGroup("Dragonsong", parent);
    data.name_fr = "Quêtes de la Guerre du Chant du Dragon";

    data.initializeTasks(tasks);

    return data;
};
