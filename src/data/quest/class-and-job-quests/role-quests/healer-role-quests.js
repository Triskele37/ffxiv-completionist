import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/class-job-quests/role-quests/healer-role-quests";

export const Quests_Class_and_Job_Role_Healer = function(parent) {
    return new DataGroup("Healer", parent).initializeTasks(tasks);
};
