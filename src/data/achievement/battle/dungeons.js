import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/battle/dungeons";

export const Achievements_Battle_Dungeons = function(parent) {
    return new DataGroup("Dungeons", parent).initializeTasks(tasks);
};
