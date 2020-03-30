import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/pvp/the-wolves-den";

export const Achievements_PvP_The_Wolves_Den = function(parent) {
    return new DataGroup("The Wolves' Den", parent).initializeTasks(tasks);
};
