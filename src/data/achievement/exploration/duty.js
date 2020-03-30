import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/exploration/duty";

export const Achievements_Exploration_Duty = function(parent) {
    return new DataGroup("Duty", parent).initializeTasks(tasks);
};
