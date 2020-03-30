import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/crafting-gathering/all-disciplines";

export const Achievements_Crafting_and_Gathering_All_Disciplines = function(parent) {
    return new DataGroup("All Disciplines", parent).initializeTasks(tasks);
};
