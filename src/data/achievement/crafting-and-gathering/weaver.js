import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/weaver";

export const Achievements_Crafting_and_Gathering_Weaver = function(parent) {
    return new DataGroup("Weaver", parent).initializeTasks(tasks);
};
