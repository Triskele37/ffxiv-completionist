import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/disciple-of-magic-job-quests/summoner-quests";

export const Quests_Class_and_Job_Disciple_of_Magic_Job_Summoner = function(parent) {
    return new DataGroup("Summoner", parent).initializeTasks(tasks);
};
