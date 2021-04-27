import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/lominsan-sidequests/western-la-noscea";

export const Duty_Quests_Sidequests_Lominsan_Western_La_Noscea = function(parent) {
    return new DataGroup("Western La Noscea", parent).initializeTasks(tasks);
};
