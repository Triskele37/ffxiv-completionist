import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/leatherworker";

export const Achievements_Crafting_and_Gathering_Leatherworker = function(parent) {
    return new DataGroup("Leatherworker", parent).initializeTasks(tasks);
};
