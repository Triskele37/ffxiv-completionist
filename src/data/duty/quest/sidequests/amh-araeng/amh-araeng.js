import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/amh-araeng-sidequests/amh-araeng";

export const Duty_Quests_Sidequests_Amh_Araeng_Amh_Araeng = function(parent) {
    return new DataGroup("Amh Araeng", parent).initializeTasks(tasks);
};
