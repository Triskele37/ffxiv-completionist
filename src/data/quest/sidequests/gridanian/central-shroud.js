import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/gridanian-sidequests/central-shroud";

export const Quests_Sidequests_Gridanian_Central_Shroud = function(parent) {
    return new DataGroup("Central Shroud", parent).initializeTasks(tasks);
};
