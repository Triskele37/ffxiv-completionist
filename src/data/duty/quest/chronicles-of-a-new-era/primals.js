import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../resources/en/duty/quest/chronicles-of-a-new-era/chronicles-of-a-new-era-primals/primal-quests";

export const Duty_Quests_Chronicles_of_a_New_Era_Primals = function(parent) {
    return new DataGroup("Primals", parent).initializeTasks(tasks);
};
