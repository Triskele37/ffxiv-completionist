import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quest/chronicles-of-a-new-era/chronicles-of-a-new-era-the-sorrow-of-werlyt/garlemalds-machinations";

export const Quests_Chronicles_of_a_New_Era_The_Sorrow_of_Werlyt = function(parent) {
    return new DataGroup("The Sorrow of Werlyt", parent).initializeTasks(tasks);
};
