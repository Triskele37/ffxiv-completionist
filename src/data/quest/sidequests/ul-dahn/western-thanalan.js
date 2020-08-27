import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/uldahn-sidequests/western-thanalan";

export const Quests_Sidequests_Ul_Dahn_Western_Thanalan = function(parent) {
    return new DataGroup("Western Thanalan", parent).initializeTasks(tasks);
};
