import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/gyr-abanian-sidequests/rhalgrs-reach";

export const Quests_Sidequests_Gyr_Abanian_Rhalgrs_Reach = function(parent) {
    return new DataGroup("Rhalgr's Reach", parent).initializeTasks(tasks);
};
