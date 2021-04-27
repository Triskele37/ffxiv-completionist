import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/gyr-abanian-sidequests/the-lochs";

export const Duty_Quests_Sidequests_Gyr_Abanian_The_Lochs = function(parent) {
    return new DataGroup("The Lochs", parent).initializeTasks(tasks);
};
