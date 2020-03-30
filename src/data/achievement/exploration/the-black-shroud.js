import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/exploration/the-black-shroud";

export const Achievements_Exploration_The_Black_Shroud = function(parent) {
    return new DataGroup("The Black Shroud", parent).initializeTasks(tasks);
};
