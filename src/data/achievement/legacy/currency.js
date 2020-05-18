import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/legacy/currency";

export const Achievements_Legacy_Currency = function(parent) {
    return new DataGroup("Currency", parent).initializeTasks(tasks);
};
