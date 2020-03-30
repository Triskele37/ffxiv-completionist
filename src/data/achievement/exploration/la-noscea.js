import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/exploration/la-noscea";

export const Achievements_Exploration_La_Noscea = function(parent) {
    return new DataGroup("La Noscea", parent).initializeTasks(tasks);
};
