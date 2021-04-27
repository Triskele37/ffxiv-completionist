import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/class-job-quests/disciple-of-the-land-quests/miner-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_the_Land_Miner = function(parent) {
    return new DataGroup("Miner", parent).initializeTasks(tasks);
};
