import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/gyr-abanian-sidequests/the-peaks";

export const Duty_Quests_Sidequests_Gyr_Abanian_The_Peaks = function(parent) {
    return new DataGroup("The Peaks", parent).initializeTasks(tasks);
};
