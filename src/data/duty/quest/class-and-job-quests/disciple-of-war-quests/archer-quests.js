import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/class-job-quests/disciple-of-war-quests/archer-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_War_Archer = function(parent) {
    return new DataGroup("Archer", parent).initializeTasks(tasks);
};
