import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/coerthan-sidequests/coerthas-western-highlands";

export const Duty_Quests_Sidequests_Coerthan_Coerthas_Western_Highlands = function(parent) {
    return new DataGroup("Coerthas Western Highlands", parent).initializeTasks(tasks);
};
