import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/class-job-quests/role-quests/tank-role-quests";

export const Duty_Quests_Class_and_Job_Role_Tank = function(parent) {
    return new DataGroup("Tank", parent).initializeTasks(tasks);
};
