import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/duty";

export const Achievements_Exploration_Duty = function(parent) {
    return new DataGroup("Duty", parent).initializeTasks(tasks);
};
