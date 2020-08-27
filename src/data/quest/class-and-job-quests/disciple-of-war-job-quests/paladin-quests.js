import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/class-job-quests/disciple-of-war-job-quests/paladin-quests";

export const Quests_Class_and_Job_Disciple_of_War_Job_Paladin = function(parent) {
    return new DataGroup("Paladin", parent).initializeTasks(tasks);
};
