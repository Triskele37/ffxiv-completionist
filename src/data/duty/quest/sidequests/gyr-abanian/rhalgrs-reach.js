import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/gyr-abanian-sidequests/rhalgrs-reach";

export const Duty_Quests_Sidequests_Gyr_Abanian_Rhalgrs_Reach = function(parent) {
    return new DataGroup("Rhalgr's Reach", parent).initializeTasks(tasks);
};
