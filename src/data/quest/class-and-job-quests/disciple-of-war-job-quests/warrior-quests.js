import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-war-job-quests/warrior-quests";

export const Quests_Class_and_Job_Disciple_of_War_Job_Warrior = function(parent) {
    return new DataGroup("Warrior", parent).initializeTasks(tasks);
};
