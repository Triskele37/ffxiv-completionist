import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/goldsmith";

export const Achievements_Crafting_and_Gathering_Goldsmith = function(parent) {
    return new DataGroup("Goldsmith", parent).initializeTasks(tasks);
};
