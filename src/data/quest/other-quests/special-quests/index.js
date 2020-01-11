import { CollaborationQuests } from "./collaboration-quests";

export const SpecialQuests = {
    name: "Special",
    subGroups: [
        CollaborationQuests,
    ],
    tableConfig: {
        headers: ["Level", "Name"],
        columnKeys: ["level", "name"]
    },
    tasks: [
        {
            level: "1",
            name: "The Ties That Bind"
        }
    ]
};
