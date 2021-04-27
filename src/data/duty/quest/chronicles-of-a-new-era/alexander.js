import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../resources/en/duty/quest/chronicles-of-a-new-era/chronicles-of-a-new-era-alexander/alexander-quests";

export const Duty_Quests_Chronicles_of_a_New_Era_Alexander = function(parent) {
    return new DataGroup("Alexander", parent).initializeTasks(tasks);
};
