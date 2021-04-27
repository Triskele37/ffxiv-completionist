import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/class-job-quests/role-quests/magical-dps-quests";

export const Duty_Quests_Class_and_Job_Role_Magical_DPS = function(parent) {
    return new DataGroup("Magical DPS", parent).initializeTasks(tasks);
};
