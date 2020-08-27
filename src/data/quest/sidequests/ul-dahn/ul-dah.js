import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/uldahn-sidequests/uldah";

export const Quests_Sidequests_Ul_Dahn_Ul_Dah = function(parent) {
    return new DataGroup("Ul'Dah", parent).initializeTasks(tasks);
};
