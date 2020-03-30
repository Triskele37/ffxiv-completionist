import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/character/commendation";

export const Achievements_Character_Commendation = function(parent) {
    return new DataGroup("Commendation", parent).initializeTasks(tasks);
};
