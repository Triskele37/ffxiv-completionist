import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/uldahn-sidequests/chocobo-square";

export const Duty_Quests_Sidequests_Ul_Dahn_Chocobo_Square = function(parent) {
    return new DataGroup("Chocobo Square", parent).initializeTasks(tasks);
};
