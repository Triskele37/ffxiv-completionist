import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/norvrandt";

export const Achievements_Exploration_Norvrandt = function(parent) {
    return new DataGroup("Norvrandt", parent).initializeTasks(tasks);
};
