import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/character/disciples-of-the-land";

export const Achievements_Character_Disciple_of_the_Land = function(parent) {
    return new DataGroup("Disciple of the Land", parent).initializeTasks(tasks);
};
