import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/lominsan-sidequests/western-la-noscea";

export const Quests_Sidequests_Lominsan_Western_La_Noscea = function(parent) {
    return new DataGroup("Western La Noscea", parent).initializeTasks(tasks);
};
