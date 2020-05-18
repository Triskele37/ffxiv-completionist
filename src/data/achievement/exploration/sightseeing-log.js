import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/sightseeing-log";

export const Achievements_Exploration_Sightseeing_Log = function(parent) {
    return new DataGroup("Sightseeing Log", parent).initializeTasks(tasks);
};
