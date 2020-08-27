import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/il-mheg-sidequests/il-mheg";

export const Quests_Sidequests_Il_Mheg_Il_Mheg = function(parent) {
    return new DataGroup("Il Mheg", parent).initializeTasks(tasks);
};
