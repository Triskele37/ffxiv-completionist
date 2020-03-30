import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-war-quests/gladiator-quests";

export const Quests_Class_and_Job_Disciple_of_War_Gladiator = function(parent) {
    return new DataGroup("Gladiator", parent).initializeTasks(tasks);
};
