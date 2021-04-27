import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/class-job-quests/disciple-of-magic-job-quests/summoner-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Summoner = function(parent) {
    return new DataGroup("Summoner", parent).initializeTasks(tasks);
};
