import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/lominsan-sidequests/middle-la-noscea";

export const Duty_Quests_Sidequests_Lominsan_Middle_La_Noscea = function(parent) {
    return new DataGroup("Middle La Noscea", parent).initializeTasks(tasks);
};
