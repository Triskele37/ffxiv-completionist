import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/lominsan-sidequests/upper-la-noscea";

export const Quests_Sidequests_Lominsan_Upper_La_Noscea = function(parent) {
    return new DataGroup("Upper La Noscea", parent).initializeTasks(tasks);
};
