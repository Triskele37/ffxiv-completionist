import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/armorer";

export const Achievements_Crafting_and_Gathering_Armorer = function(parent) {
    return new DataGroup("Armorer", parent).initializeTasks(tasks);
};
