import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/gridanian-sidequests/north-shroud";

export const Duty_Quests_Sidequests_Gridanian_North_Shroud = function(parent) {
    return new DataGroup("North Shroud", parent).initializeTasks(tasks);
};
