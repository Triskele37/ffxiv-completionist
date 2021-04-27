import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/class-job-quests/disciple-of-war-job-quests/monk-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_War_Job_Monk = function(parent) {
    return new DataGroup("Monk", parent).initializeTasks(tasks);
};
