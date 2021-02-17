import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/legacy/quests";

export const Character_Achievements_Legacy_Quests = function(parent) {
    return new DataGroup("Quests", parent).initializeTasks(tasks);
};
