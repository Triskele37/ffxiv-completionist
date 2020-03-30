import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/uldahn-sidequests/southern-thanalan";

export const Quests_Sidequests_Ul_Dahn_Southern_Thanalan = function(parent) {
    return new DataGroup("Southern Thanalan", parent).initializeTasks(tasks);
};
