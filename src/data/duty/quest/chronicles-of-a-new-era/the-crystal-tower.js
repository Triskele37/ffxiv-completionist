import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../resources/en/duty/quest/chronicles-of-a-new-era/chronicles-of-a-new-era-the-crystal-tower/crystal-tower-quests";

export const Duty_Quests_Chronicles_of_a_New_Era_The_Crystal_Tower = function(parent) {
    return new DataGroup("The Crystal Tower", parent).initializeTasks(tasks);
};
