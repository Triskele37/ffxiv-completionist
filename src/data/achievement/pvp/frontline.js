import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/pvp/frontline";

export const Achievements_PvP_Frontline = function(parent) {
    return new DataGroup("Frontline", parent).initializeTasks(tasks);
};
