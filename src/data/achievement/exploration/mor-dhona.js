import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/mor-dhona";

export const Achievements_Exploration_Mor_Dhona = function(parent) {
    return new DataGroup("Mor Dhona", parent).initializeTasks(tasks);
};
