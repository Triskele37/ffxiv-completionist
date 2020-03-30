import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/crafting-gathering/alchemist";

export const Achievements_Crafting_and_Gathering_Alchemist = function(parent) {
    return new DataGroup("Alchemist", parent).initializeTasks(tasks);
};
