import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-war-job-quests/dark-knight-quests";

export const Quests_Class_and_Job_Disciple_of_War_Job_Dark_Knight = function(parent) {
    return new DataGroup("Dark Knight", parent).initializeTasks(tasks);
};
