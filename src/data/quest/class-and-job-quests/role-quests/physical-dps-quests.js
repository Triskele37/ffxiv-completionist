import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/role-quests/physical-dps-quests";

export const Quests_Class_and_Job_Role_Physical_DPS = function(parent) {
    return new DataGroup("Physical DPS", parent).initializeTasks(tasks);
};
