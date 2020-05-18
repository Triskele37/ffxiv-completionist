import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/resistance-weapons";

export const Achievements_Items_Resistance_Weapons = function(parent) {
    return new DataGroup("Resistance Weapons", parent).initializeTasks(tasks);
};
