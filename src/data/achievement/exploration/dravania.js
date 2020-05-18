import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/dravania";

export const Achievements_Exploration_Dravania = function(parent) {
    return new DataGroup("Dravania", parent).initializeTasks(tasks);
};
