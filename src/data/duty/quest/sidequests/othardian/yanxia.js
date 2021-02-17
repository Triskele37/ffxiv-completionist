import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/othardian-sidequests/yanxia";

export const Duty_Quests_Sidequests_Othardian_Yanxia = function(parent) {
    return new DataGroup("Yanxia", parent).initializeTasks(tasks);
};
