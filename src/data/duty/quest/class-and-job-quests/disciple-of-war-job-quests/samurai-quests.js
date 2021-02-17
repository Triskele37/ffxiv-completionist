import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/class-job-quests/disciple-of-war-job-quests/samurai-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_War_Job_Samurai = function(parent) {
    return new DataGroup("Samurai", parent).initializeTasks(tasks);
};
