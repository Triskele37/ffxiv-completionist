import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/character/general";

export const Achievements_Character_General = function(parent) {
    return new DataGroup("General", parent).initializeTasks(tasks);
};
