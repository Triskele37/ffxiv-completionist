import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/legacy/gathering";

export const Character_Achievements_Legacy_Gathering = function(parent) {
    return new DataGroup("Gathering", parent).initializeTasks(tasks);
};
