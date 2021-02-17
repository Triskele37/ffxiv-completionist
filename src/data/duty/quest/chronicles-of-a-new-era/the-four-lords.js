import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/chronicles-of-a-new-era/chronicles-of-a-new-era-the-four-lords/the-four-lords";

export const Duty_Quests_Chronicles_of_a_New_Era_The_Four_Lords = function(parent) {
    return new DataGroup("The Four Lords", parent).initializeTasks(tasks);
};
