import { DataGroup } from "../../../DataGroup";

import { Quests_Other_Special_Collaboration } from "./collaboration-quests";

export const Quests_Other_Special = function(parent) {
    const data = new DataGroup("Special", parent);
    data.defaultCompletion = "X";

    data.initializeSubGroups([Quests_Other_Special_Collaboration]);
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        level: "1",
        name: "The Ties That Bind"
    }
];
