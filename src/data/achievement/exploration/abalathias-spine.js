import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/exploration/abalathias-spine";

export const Achievements_Exploration_Abalathias_Spine = function(parent) {
    return new DataGroup("Abalathia's Spine", parent).initializeTasks(tasks);
};
