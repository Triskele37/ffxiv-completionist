import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/class-job-quests/disciple-of-war-job-quests/warrior-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_War_Job_Warrior = function(parent) {
    return new DataGroup("Warrior", parent).initializeTasks(tasks);
};
