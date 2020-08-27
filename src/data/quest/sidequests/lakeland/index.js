import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/lakeland-sidequests/lakeland";

import { Quests_Sidequests_Lakeland_The_Crystarium } from "./the-crystarium";

export const Quests_Sidequests_Lakeland = function(parent) {
    return new DataGroup("Lakeland", parent).initializeSubGroups([
        Quests_Sidequests_Lakeland_The_Crystarium,
    ]).initializeTasks(tasks);
};
