import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../resources/en/duty/quest/chronicles-of-a-new-era/chronicles-of-a-new-era-omega/omega-quests";

export const Duty_Quests_Chronicles_of_a_New_Era_Omega = function(parent) {
    return new DataGroup("Omega", parent).initializeTasks(tasks);
};
