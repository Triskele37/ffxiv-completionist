import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/coerthan-sidequests/coerthas-central-highlands";

export const Duty_Quests_Sidequests_Coerthan_Coerthas_Central_Highlands = function(parent) {
    return new DataGroup("Coerthas Central  Highlands", parent).initializeTasks(tasks);
};
