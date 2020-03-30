import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/battle/raids";

export const Achievements_Battle_Raids = function(parent) {
    return new DataGroup("Raids", parent).initializeTasks(tasks);
};
