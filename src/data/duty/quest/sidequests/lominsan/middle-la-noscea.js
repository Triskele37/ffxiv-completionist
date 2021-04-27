import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/lominsan-sidequests/middle-la-noscea";

export const Duty_Quests_Sidequests_Lominsan_Middle_La_Noscea = function(parent) {
    return new DataGroup("Middle La Noscea", parent).initializeTasks(tasks);
};
