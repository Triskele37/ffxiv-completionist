import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/battle/treasure-hunt";

export const Achievements_Battle_Treasure_Hunt = function(parent) {
    return new DataGroup("Treasure Hunt", parent).initializeTasks(tasks);
};
