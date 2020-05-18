import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/othard";

export const Achievements_Exploration_Othard = function(parent) {
    return new DataGroup("Othard", parent).initializeTasks(tasks);
};
