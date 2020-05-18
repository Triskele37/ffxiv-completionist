import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/items";

export const Achievements_Items_Items = function(parent) {
    return new DataGroup("Items", parent).initializeTasks(tasks);
};
