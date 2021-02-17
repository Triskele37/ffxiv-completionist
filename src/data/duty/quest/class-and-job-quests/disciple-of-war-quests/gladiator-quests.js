import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/class-job-quests/disciple-of-war-quests/gladiator-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_War_Gladiator = function(parent) {
    return new DataGroup("Gladiator", parent).initializeTasks(tasks);
};
