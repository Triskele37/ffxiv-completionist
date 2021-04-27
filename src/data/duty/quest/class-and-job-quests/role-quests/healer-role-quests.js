import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/class-job-quests/role-quests/healer-role-quests";

export const Duty_Quests_Class_and_Job_Role_Healer = function(parent) {
    return new DataGroup("Healer", parent).initializeTasks(tasks);
};
