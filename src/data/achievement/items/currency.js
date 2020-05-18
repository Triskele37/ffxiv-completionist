import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/currency";

export const Achievements_Items_Currency = function(parent) {
    return new DataGroup("Currency", parent).initializeTasks(tasks);
};
