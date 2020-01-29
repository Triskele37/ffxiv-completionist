import { QuestColumnConfig } from "../../columnConfigs";

import { Quest_Class_And_Job_Role_Tank } from "./tank-role-quests";
import { Quest_Class_And_Job_Role_Healer } from "./healer-role-quests";
import { Quest_Class_And_Job_Role_Physical_DPS } from "./physical-dps-quests";
import { Quest_Class_And_Job_Role_Magical_DPS } from "./magical-dps-quests";

export const Quest_Class_And_Job_Role = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.role`;

    return {
        name: "Role",
        storageKey,
        groupKeys: [
            "Tank",
            "Healer",
            "Physical_DPS",
            "Magical_DPS",
        ],
        // Groups
        Tank: Quest_Class_And_Job_Role_Tank(storageKey),
        Healer: Quest_Class_And_Job_Role_Healer(storageKey),
        Physical_DPS: Quest_Class_And_Job_Role_Physical_DPS(storageKey),
        Magical_DPS: Quest_Class_And_Job_Role_Magical_DPS(storageKey),
        // Tasks
        columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "80",
        name: "Shadow Walk with Me"
    },
];
