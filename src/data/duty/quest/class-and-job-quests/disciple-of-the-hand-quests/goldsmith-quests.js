import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/class-job-quests/disciple-of-the-hand-quests/goldsmith-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Goldsmith = function(parent) {
    return new DataGroup("Goldsmith", parent).initializeTasks(tasks);
};
