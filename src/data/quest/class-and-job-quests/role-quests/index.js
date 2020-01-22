import { QuestColumnConfig } from "../../columnConfigs";
import { TankRoleQuests } from "./tank-role-quests";
import { HealerRoleQuests } from "./healer-role-quests";
import { PhysicalDPSQuests } from "./physical-dps-quests";
import { MagicalDPSQuests } from "./magical-dps-quests";

export const RoleQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.role`;

    return {
        name: "Role",
        storageKey,
        subGroups: [
            TankRoleQuests(storageKey),
            HealerRoleQuests(storageKey),
            PhysicalDPSQuests(storageKey),
            MagicalDPSQuests(storageKey),
        ],
        columns: QuestColumnConfig,
        tasks: [
            {
            	level: "80",
            	name: "Shadow Walk with Me"
            },
        ]
    };
};
