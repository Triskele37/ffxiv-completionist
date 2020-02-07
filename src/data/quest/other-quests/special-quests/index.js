import { DataGroup } from "../../../DataGroup";

import { Quests_Other_Special_Collaboration } from "./collaboration-quests";

export const Quests_Other_Special = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Other_Special_Collaboration,
    ]).initializeTasks(tasks);
};

const tasks = [
    {
        level: "1",
        name: "The Ties That Bind"
    }
];
