import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-war-job-quests/machinist-quests";

export const Quests_Class_and_Job_Disciple_of_War_Job_Machinist = function(parent) {
    return new DataGroup("Machinist", parent).initializeTasks(tasks);
};
