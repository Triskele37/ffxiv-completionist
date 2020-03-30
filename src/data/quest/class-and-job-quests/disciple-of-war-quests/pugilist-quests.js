import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-war-quests/pugilist-quests";

export const Quests_Class_and_Job_Disciple_of_War_Pugilist = function(parent) {
    return new DataGroup("Pugilist", parent).initializeTasks(tasks);
};
