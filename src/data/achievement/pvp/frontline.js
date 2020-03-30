import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/pvp/frontline";

export const Achievements_PvP_Frontline = function(parent) {
    return new DataGroup("Frontline", parent).initializeTasks(tasks);
};
