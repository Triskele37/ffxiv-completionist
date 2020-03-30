import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/character/gold-saucer";

export const Achievements_Character_Gold_Saucer = function(parent) {
    return new DataGroup("Gold Saucer", parent).initializeTasks(tasks);
};
