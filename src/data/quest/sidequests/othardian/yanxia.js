import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/othardian-sidequests/yanxia";

export const Quests_Sidequests_Othardian_Yanxia = function(parent) {
    return new DataGroup("Yanxia", parent).initializeTasks(tasks);
};
