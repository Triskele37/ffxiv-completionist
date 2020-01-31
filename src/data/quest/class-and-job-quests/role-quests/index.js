import { DataGroup } from "../../../DataGroup";

import { Quests_Class_and_Job_Role_Tank } from "./tank-role-quests";
import { Quests_Class_and_Job_Role_Healer } from "./healer-role-quests";
import { Quests_Class_and_Job_Role_Physical_DPS } from "./physical-dps-quests";
import { Quests_Class_and_Job_Role_Magical_DPS } from "./magical-dps-quests";

export const Quests_Class_and_Job_Role = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Class_and_Job_Role_Tank,
        Quests_Class_and_Job_Role_Healer,
        Quests_Class_and_Job_Role_Physical_DPS,
        Quests_Class_and_Job_Role_Magical_DPS,
    ]).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80",
        name: "Shadow Walk with Me"
    },
];
