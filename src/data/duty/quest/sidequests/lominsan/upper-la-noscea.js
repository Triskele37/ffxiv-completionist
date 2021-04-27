import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/lominsan-sidequests/upper-la-noscea";

export const Duty_Quests_Sidequests_Lominsan_Upper_La_Noscea = function(parent) {
    return new DataGroup("Upper La Noscea", parent).initializeTasks(tasks);
};
