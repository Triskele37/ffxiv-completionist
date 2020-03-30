import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/crafting-gathering/fisher";

export const Achievements_Crafting_and_Gathering_Fisher = function(parent) {
    return new DataGroup("Fisher", parent).initializeTasks(tasks);
};
