import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/gridanian-sidequests/south-shroud";

export const Quests_Sidequests_Gridanian_South_Shroud = function(parent) {
    return new DataGroup("South Shroud", parent).initializeTasks(tasks);
};
