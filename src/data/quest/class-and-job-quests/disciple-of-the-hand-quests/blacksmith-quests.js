import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/class-job-quests/disciple-of-the-hand-quests/blacksmith-quests";

export const Quests_Class_and_Job_Disciple_of_the_Hand_Blacksmith = function(parent) {
    return new DataGroup("Blacksmith", parent).initializeTasks(tasks);
};
