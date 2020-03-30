import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/crafting-gathering/armorer";

export const Achievements_Crafting_and_Gathering_Armorer = function(parent) {
    return new DataGroup("Armorer", parent).initializeTasks(tasks);
};
