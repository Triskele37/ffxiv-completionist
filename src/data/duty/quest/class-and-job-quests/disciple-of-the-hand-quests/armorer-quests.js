import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/class-job-quests/disciple-of-the-hand-quests/armorer-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Armorer = function(parent) {
    return new DataGroup("Armorer", parent).initializeTasks(tasks);
};
