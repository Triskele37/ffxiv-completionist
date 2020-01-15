import { SimpleQuestColumnConfig } from "../../columnConfigs";
import { CollaborationQuests } from "./collaboration-quests";

export const SpecialQuests = {
    name: "Special",
    subGroups: [
        CollaborationQuests,
    ],
    columns: SimpleQuestColumnConfig,
    tasks: [
        {
            level: "1",
            name: "The Ties That Bind"
        }
    ]
};
