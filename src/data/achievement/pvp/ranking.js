import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/pvp/ranking";

export const Achievements_PvP_Ranking = function(parent) {
    return new DataGroup("Ranking", parent).initializeTasks(tasks);
};
