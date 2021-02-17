import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/lominsan-sidequests/lower-la-noscea";

export const Duty_Quests_Sidequests_Lominsan_Lower_La_Noscea = function(parent) {
    return new DataGroup("Lower La Noscea", parent).initializeTasks(tasks);
};
