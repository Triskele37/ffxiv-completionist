import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/quests/levequests";

export const Achievements_Quests_Levequests = function(parent) {
    return new DataGroup("Levequests", parent).initializeTasks(tasks);
};
