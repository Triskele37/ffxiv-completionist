import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/class-job-quests/disciple-of-the-land-quests/botanist-quests";

export const Quests_Class_and_Job_Disciple_of_the_Land_Botanist = function(parent) {
    return new DataGroup("Botanist", parent).initializeTasks(tasks);
};
