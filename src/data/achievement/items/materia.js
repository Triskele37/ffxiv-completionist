import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/items/materia";

export const Achievements_Items_Materia = function(parent) {
    return new DataGroup("Materia", parent).initializeTasks(tasks);
};
