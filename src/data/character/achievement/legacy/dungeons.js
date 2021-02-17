import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/legacy/dungeons";

export const Character_Achievements_Legacy_Dungeons = function(parent) {
    return new DataGroup("Dungeons", parent).initializeTasks(tasks);
};
