import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/lominsan-sidequests/upper-la-noscea";

export const Duty_Quests_Sidequests_Lominsan_Upper_La_Noscea = function(parent) {
    return new DataGroup("Upper La Noscea", parent).initializeTasks(tasks);
};
