import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/uldahn-sidequests/eastern-thanalan";

export const Quests_Sidequests_Ul_Dahn_Eastern_Thanalan = function(parent) {
    return new DataGroup("Eastern Thanalan", parent).initializeTasks(tasks);
};
