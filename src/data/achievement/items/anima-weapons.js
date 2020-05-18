import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/anima-weapons";

export const Achievements_Items_Anima_Weapons = function(parent) {
    return new DataGroup("Anima Weapons", parent).initializeTasks(tasks);
};
