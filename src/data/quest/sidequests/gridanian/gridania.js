import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/gridanian-sidequests/gridania";

export const Quests_Sidequests_Gridanian_Gridania = function(parent) {
    return new DataGroup("Gridania", parent).initializeTasks(tasks);
};
