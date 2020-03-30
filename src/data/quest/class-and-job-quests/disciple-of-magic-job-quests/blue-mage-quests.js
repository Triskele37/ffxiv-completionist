import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-magic-job-quests/blue-mage-quests";

export const Quests_Class_and_Job_Disciple_of_Magic_Job_Blue_Mage = function(parent) {
    return new DataGroup("Blue Mage", parent).initializeTasks(tasks);
};
