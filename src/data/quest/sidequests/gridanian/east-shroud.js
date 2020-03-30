import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/gridanian-sidequests/east-shroud";

export const Quests_Sidequests_Gridanian_East_Shroud = function(parent) {
    return new DataGroup("East Shroud", parent).initializeTasks(tasks);
};
