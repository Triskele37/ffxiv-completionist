import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/dravanian-sidequests/idyllshire";

export const Quests_Sidequests_Dravanian_Idyllshire = function(parent) {
    return new DataGroup("Idyllshire", parent).initializeTasks(tasks);
};
