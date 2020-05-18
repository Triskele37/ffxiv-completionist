import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/character/disciples-of-the-hand";

export const Achievements_Character_Disciple_of_the_Hand = function(parent) {
    return new DataGroup("Disciple of the Hand", parent).initializeTasks(tasks);
};
