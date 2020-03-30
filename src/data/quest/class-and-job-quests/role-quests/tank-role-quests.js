import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/class-job-quests/role-quests/tank-role-quests";

export const Quests_Class_and_Job_Role_Tank = function(parent) {
    return new DataGroup("Tank", parent).initializeTasks(tasks);
};
