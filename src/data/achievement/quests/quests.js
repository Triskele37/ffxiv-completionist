import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/quests/quests";

export const Achievements_Quests_Quests = function(parent) {
    return new DataGroup("Quests", parent).initializeTasks(tasks);
};
