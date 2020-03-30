import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-the-hand-quests/leatherworker-quests";

export const Quests_Class_and_Job_Disciple_of_the_Hand_Leatherworker = function(parent) {
    return new DataGroup("Leatherworker", parent).initializeTasks(tasks);
};
