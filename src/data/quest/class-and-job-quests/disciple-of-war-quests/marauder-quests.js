import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-war-quests/marauder-quests";

export const Quests_Class_and_Job_Disciple_of_War_Marauder = function(parent) {
    return new DataGroup("Marauder", parent).initializeTasks(tasks);
};
