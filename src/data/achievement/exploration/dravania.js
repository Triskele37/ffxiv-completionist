import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/exploration/dravania";

export const Achievements_Exploration_Dravania = function(parent) {
    return new DataGroup("Dravania", parent).initializeTasks(tasks);
};
