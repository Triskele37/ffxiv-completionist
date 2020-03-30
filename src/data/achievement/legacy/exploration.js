import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/legacy/exploration";

export const Achievements_Legacy_Exploration = function(parent) {
    return new DataGroup("Exploration", parent).initializeTasks(tasks);
};
