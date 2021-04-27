import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/gridanian-sidequests/gridania";

export const Duty_Quests_Sidequests_Gridanian_Gridania = function(parent) {
    return new DataGroup("Gridania", parent).initializeTasks(tasks);
};
