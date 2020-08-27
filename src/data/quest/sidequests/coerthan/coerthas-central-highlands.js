import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/coerthan-sidequests/coerthas-central-highlands";

export const Quests_Sidequests_Coerthan_Coerthas_Central_Highlands = function(parent) {
    return new DataGroup("Coerthas Central  Highlands", parent).initializeTasks(tasks);
};
