import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/class-job-quests/role-quests/physical-dps-quests";

export const Duty_Quests_Class_and_Job_Role_Physical_DPS = function(parent) {
    return new DataGroup("Physical DPS", parent).initializeTasks(tasks);
};
