import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/gyr-abanian-sidequests/the-fringes";

export const Duty_Quests_Sidequests_Gyr_Abanian_The_Fringes = function(parent) {
    return new DataGroup("The Fringes", parent).initializeTasks(tasks);
};
