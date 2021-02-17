import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/class-job-quests/disciple-of-magic-quests/thaumaturge-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_Magic_Thaumaturge = function(parent) {
    return new DataGroup("Thaumaturge", parent).initializeTasks(tasks);
};
