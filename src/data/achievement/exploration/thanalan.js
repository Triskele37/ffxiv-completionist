import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/thanalan";

export const Achievements_Exploration_Thanalan = function(parent) {
    return new DataGroup("Thanalan", parent).initializeTasks(tasks);
};
