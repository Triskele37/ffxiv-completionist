import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/exploration/sightseeing-log";

export const Achievements_Exploration_Sightseeing_Log = function(parent) {
    return new DataGroup("Sightseeing Log", parent).initializeTasks(tasks);
};
