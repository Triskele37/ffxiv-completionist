import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/pvp/rival-wings";

export const Achievements_PvP_Rival_Wings = function(parent) {
    return new DataGroup("Rival Wings", parent).initializeTasks(tasks);
};
