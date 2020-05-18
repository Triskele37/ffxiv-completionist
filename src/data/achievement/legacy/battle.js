import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/legacy/battle";

export const Achievements_Legacy_Battle = function(parent) {
    return new DataGroup("Battle", parent).initializeTasks(tasks);
};
