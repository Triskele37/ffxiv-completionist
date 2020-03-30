import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-magic-job-quests/black-mage-quests";

export const Quests_Class_and_Job_Disciple_of_Magic_Job_Black_Mage = function(parent) {
    return new DataGroup("Black Mage", parent).initializeTasks(tasks);
};
