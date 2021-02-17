import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/class-job-quests/disciple-of-the-hand-quests/carpenter-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Carpenter = function(parent) {
    return new DataGroup("Carpenter", parent).initializeTasks(tasks);
};
