import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/legacy/exploration";

export const Character_Achievements_Legacy_Exploration = function(parent) {
    return new DataGroup("Exploration", parent).initializeTasks(tasks);
};
