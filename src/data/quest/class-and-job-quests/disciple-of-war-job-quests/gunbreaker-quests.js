import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/class-job-quests/disciple-of-war-job-quests/gunbreaker-quests";

export const Quests_Class_and_Job_Disciple_of_War_Job_Gunbreaker = function(parent) {
    return new DataGroup("Gunbreaker", parent).initializeTasks(tasks);
};
