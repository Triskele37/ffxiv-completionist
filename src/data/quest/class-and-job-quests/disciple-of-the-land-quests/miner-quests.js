import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/class-job-quests/disciple-of-the-land-quests/miner-quests";

export const Quests_Class_and_Job_Disciple_of_the_Land_Miner = function(parent) {
    return new DataGroup("Miner", parent).initializeTasks(tasks);
};
