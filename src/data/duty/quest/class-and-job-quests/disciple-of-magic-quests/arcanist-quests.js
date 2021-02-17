import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/class-job-quests/disciple-of-magic-quests/arcanist-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_Magic_Arcanist = function(parent) {
    return new DataGroup("Arcanist", parent).initializeTasks(tasks);
};
