import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-war-quests/lancer-quests";

export const Quests_Class_and_Job_Disciple_of_War_Lancer = function(parent) {
    return new DataGroup("Lancer", parent).initializeTasks(tasks);
};
