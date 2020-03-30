import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/crafting-gathering/blacksmith";

export const Achievements_Crafting_and_Gathering_Blacksmith = function(parent) {
    return new DataGroup("Blacksmith", parent).initializeTasks(tasks);
};
