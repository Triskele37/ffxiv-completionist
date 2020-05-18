import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/battle/trials";

export const Achievements_Battle_Trials = function(parent) {
    return new DataGroup("Trials", parent).initializeTasks(tasks);
};
