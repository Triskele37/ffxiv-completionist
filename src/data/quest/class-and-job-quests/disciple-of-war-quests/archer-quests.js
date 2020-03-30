import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-war-quests/archer-quests";

export const Quests_Class_and_Job_Disciple_of_War_Archer = function(parent) {
    return new DataGroup("Archer", parent).initializeTasks(tasks);
};
