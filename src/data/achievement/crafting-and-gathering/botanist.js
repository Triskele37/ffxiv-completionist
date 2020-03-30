import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/crafting-gathering/botanist";

export const Achievements_Crafting_and_Gathering_Botanist = function(parent) {
    return new DataGroup("Botanist", parent).initializeTasks(tasks);
};
