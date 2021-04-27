import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/class-job-quests/disciple-of-magic-job-quests/scholar-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Scholar = function(parent) {
    return new DataGroup("Scholar", parent).initializeTasks(tasks);
};
