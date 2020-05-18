import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/battle/raids";

export const Achievements_Battle_Raids = function(parent) {
    return new DataGroup("Raids", parent).initializeTasks(tasks);
};
