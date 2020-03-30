import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/character/disciples-of-war";

export const Achievements_Character_Disciple_of_War = function(parent) {
    return new DataGroup("Disciple of War", parent).initializeTasks(tasks);
};
