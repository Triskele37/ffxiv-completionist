import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/culinarian";

export const Achievements_Crafting_and_Gathering_Culinarian = function(parent) {
    return new DataGroup("Culinarian", parent).initializeTasks(tasks);
};
