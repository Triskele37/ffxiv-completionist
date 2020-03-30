import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/gridanian-sidequests/north-shroud";

export const Quests_Sidequests_Gridanian_North_Shroud = function(parent) {
    return new DataGroup("North Shroud", parent).initializeTasks(tasks);
};
