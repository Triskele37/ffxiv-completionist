import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/class-job-quests/disciple-of-the-hand-quests/culinarian-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_the_Hand_Culinarian = function(parent) {
    return new DataGroup("Culinarian", parent).initializeTasks(tasks);
};
