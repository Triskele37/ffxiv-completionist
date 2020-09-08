import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/lakeland-sidequests/lakeland";

import { Quests_Sidequests_Lakeland_The_Crystarium } from "./the-crystarium";

export const Quests_Sidequests_Lakeland = function(parent) {
    const data = new DataGroup("Lakeland", parent);
    data.name_fr = "Grand-Lac";

    data.initializeSubGroups([
        Quests_Sidequests_Lakeland_The_Crystarium,
    ]);

    data.initializeTasks(tasks);

    return data;
};
