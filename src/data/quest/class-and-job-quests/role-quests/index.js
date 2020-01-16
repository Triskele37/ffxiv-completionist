import { QuestColumnConfig } from "../../columnConfigs";
import { TankRoleQuests } from "./tank-role-quests";
import { HealerRoleQuests } from "./healer-role-quests";
import { PhysicalDPSQuests } from "./physical-dps-quests";
import { MagicalDPSQuests } from "./magical-dps-quests";

export const RoleQuests = {
    name: "Role",
    subGroups: [
        TankRoleQuests,
        HealerRoleQuests,
        PhysicalDPSQuests,
        MagicalDPSQuests,
    ],
	storageKey: "quest.class-and-job.role",
    columns: QuestColumnConfig,
    tasks: [
        {
        	level: "80",
        	name: "Shadow Walk with Me"
        },
    ]
};
