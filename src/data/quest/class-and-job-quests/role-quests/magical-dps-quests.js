import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/role-quests/magical-dps-quests";

export const Quests_Class_and_Job_Role_Magical_DPS = function(parent) {
    return new DataGroup("Magical DPS", parent).initializeTasks(tasks);
};
