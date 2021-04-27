import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/lominsan-sidequests/outer-la-noscea";

export const Duty_Quests_Sidequests_Lominsan_Outer_La_Noscea = function(parent) {
    return new DataGroup("Outer La Noscea", parent).initializeTasks(tasks);
};
