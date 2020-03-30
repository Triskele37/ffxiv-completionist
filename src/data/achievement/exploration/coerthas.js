import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/exploration/coerthas";

export const Achievements_Exploration_Coerthas = function(parent) {
    return new DataGroup("Coerthas", parent).initializeTasks(tasks);
};
