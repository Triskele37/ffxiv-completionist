import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/crafting-gathering/miner";

export const Achievements_Crafting_and_Gathering_Miner = function(parent) {
    return new DataGroup("Miner", parent).initializeTasks(tasks);
};
