import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/class-job-quests/disciple-of-the-land-quests/fisher-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_the_Land_Fisher = function(parent) {
    return new DataGroup("Fisher", parent).initializeTasks(tasks);
};
