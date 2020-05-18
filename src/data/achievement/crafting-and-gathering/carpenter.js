import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/carpenter";

export const Achievements_Crafting_and_Gathering_Carpenter = function(parent) {
    return new DataGroup("Carpenter", parent).initializeTasks(tasks);
};
