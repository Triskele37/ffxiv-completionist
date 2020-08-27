import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quest/chronicles-of-a-new-era/chronicles-of-a-new-era-return-to-ivalice/return-to-ivalice";

export const Quests_Chronicles_of_a_New_Era_Return_to_Ivalice = function(parent) {
    return new DataGroup("Return to Ivalice", parent).initializeTasks(tasks);
};
