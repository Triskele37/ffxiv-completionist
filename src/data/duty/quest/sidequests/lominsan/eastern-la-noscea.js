import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/lominsan-sidequests/eastern-la-noscea";

export const Duty_Quests_Sidequests_Lominsan_Eastern_La_Noscea = function(parent) {
    return new DataGroup("Eastern La Noscea", parent).initializeTasks(tasks);
};
