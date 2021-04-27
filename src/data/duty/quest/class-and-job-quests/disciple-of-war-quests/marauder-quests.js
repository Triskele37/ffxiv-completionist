import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/class-job-quests/disciple-of-war-quests/marauder-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_War_Marauder = function(parent) {
    return new DataGroup("Marauder", parent).initializeTasks(tasks);
};
