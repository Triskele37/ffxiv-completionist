import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/legacy/dungeons";

export const Achievements_Legacy_Dungeons = function(parent) {
    return new DataGroup("Dungeons", parent).initializeTasks(tasks);
};
