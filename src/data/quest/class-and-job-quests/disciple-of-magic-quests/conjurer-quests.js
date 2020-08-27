import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/class-job-quests/disciple-of-magic-quests/conjurer-quests";

export const Quests_Class_and_Job_Disciple_of_Magic_Conjurer = function(parent) {
    return new DataGroup("Conjurer", parent).initializeTasks(tasks);
};
