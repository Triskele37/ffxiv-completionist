import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/class-job-quests/disciple-of-war-quests/rogue-quests";

export const Quests_Class_and_Job_Disciple_of_War_Rogue = function(parent) {
    return new DataGroup("Rogue", parent).initializeTasks(tasks);
};
