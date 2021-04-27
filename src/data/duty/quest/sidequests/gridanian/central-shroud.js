import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/gridanian-sidequests/central-shroud";

export const Duty_Quests_Sidequests_Gridanian_Central_Shroud = function(parent) {
    return new DataGroup("Central Shroud", parent).initializeTasks(tasks);
};
