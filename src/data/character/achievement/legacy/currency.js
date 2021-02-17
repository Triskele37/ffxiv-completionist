import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/legacy/currency";

export const Character_Achievements_Legacy_Currency = function(parent) {
    return new DataGroup("Currency", parent).initializeTasks(tasks);
};
