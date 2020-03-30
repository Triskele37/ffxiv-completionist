import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/legacy/quests";

export const Achievements_Legacy_Quests = function(parent) {
    return new DataGroup("Quests", parent).initializeTasks(tasks);
};
