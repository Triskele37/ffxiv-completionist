import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/battle/the-hunt";

export const Achievements_Battle_The_Hunt = function(parent) {
    return new DataGroup("The Hunt", parent).initializeTasks(tasks);
};
