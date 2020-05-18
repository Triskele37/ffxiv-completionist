import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/collectables";

export const Achievements_Items_Collectables = function(parent) {
    return new DataGroup("Collectables", parent).initializeTasks(tasks);
};
