import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-magic-job-quests/scholar-quests";

export const Quests_Class_and_Job_Disciple_of_Magic_Job_Scholar = function(parent) {
    return new DataGroup("Scholar", parent).initializeTasks(tasks);
};
