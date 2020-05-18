import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/desynthesis";

export const Achievements_Items_Desynthesis = function(parent) {
    return new DataGroup("Desynthesis", parent).initializeTasks(tasks);
};
