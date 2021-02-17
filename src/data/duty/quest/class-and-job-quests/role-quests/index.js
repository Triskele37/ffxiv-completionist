import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/class-job-quests/role-quests/role-quests";

import { Duty_Quests_Class_and_Job_Role_Tank } from "./tank-role-quests";
import { Duty_Quests_Class_and_Job_Role_Healer } from "./healer-role-quests";
import { Duty_Quests_Class_and_Job_Role_Physical_DPS } from "./physical-dps-quests";
import { Duty_Quests_Class_and_Job_Role_Magical_DPS } from "./magical-dps-quests";

export const Duty_Quests_Class_and_Job_Role = function(parent) {
    const data = new DataGroup("Role", parent);
    data.name_fr = "Rôle";

    data.initializeSubGroups([
        Duty_Quests_Class_and_Job_Role_Tank,
        Duty_Quests_Class_and_Job_Role_Healer,
        Duty_Quests_Class_and_Job_Role_Physical_DPS,
        Duty_Quests_Class_and_Job_Role_Magical_DPS,
    ]).initializeTasks(tasks);

    return data;
};
