import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/exploration/gyr-abania";

export const Achievements_Exploration_Gyr_Abania = function(parent) {
    return new DataGroup("Gyr Abania", parent).initializeTasks(tasks);
};
