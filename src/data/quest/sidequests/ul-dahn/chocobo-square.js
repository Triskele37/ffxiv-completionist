import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/uldahn-sidequests/chocobo-square";

export const Quests_Sidequests_Ul_Dahn_Chocobo_Square = function(parent) {
    return new DataGroup("Chocobo Square", parent).initializeTasks(tasks);
};
