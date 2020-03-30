import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-magic-job-quests/white-mage-quests";

export const Quests_Class_and_Job_Disciple_of_Magic_Job_White_Mage = function(parent) {
    return new DataGroup("White Mage", parent).initializeTasks(tasks);
};
