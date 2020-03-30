import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/lominsan-sidequests/outer-la-noscea";

export const Quests_Sidequests_Lominsan_Outer_La_Noscea = function(parent) {
    return new DataGroup("Outer La Noscea", parent).initializeTasks(tasks);
};
