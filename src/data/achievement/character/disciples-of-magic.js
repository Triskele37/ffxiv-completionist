import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/character/disciples-of-magic";

export const Achievements_Character_Disciple_of_Magic = function(parent) {
    return new DataGroup("Disciple of Magic", parent).initializeTasks(tasks);
};
