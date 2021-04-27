import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/gridanian-sidequests/east-shroud";

export const Duty_Quests_Sidequests_Gridanian_East_Shroud = function(parent) {
    return new DataGroup("East Shroud", parent).initializeTasks(tasks);
};
