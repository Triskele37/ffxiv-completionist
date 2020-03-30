import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/pvp/general";

export const Achievements_PvP_General = function(parent) {
    return new DataGroup("General", parent).initializeTasks(tasks);
};
