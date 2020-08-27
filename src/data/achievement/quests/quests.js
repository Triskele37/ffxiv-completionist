import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/quests/quests";

export const Achievements_Quests_Quests = function(parent) {
    const data = new DataGroup("Quests", parent);
    data.name_de = "Aufträge";
    data.name_en = "Quests";
    data.name_fr = "Général";
    data.name_ja = "全般";

    data.initializeTasks(tasks);

    return data;
};
