import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-war-job-quests/monk-quests";

export const Quests_Class_and_Job_Disciple_of_War_Job_Monk = function(parent) {
    return new DataGroup("Monk", parent).initializeTasks(tasks);
};
