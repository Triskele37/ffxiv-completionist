import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quest/chronicles-of-a-new-era/chronicles-of-a-new-era-bahamut/bahamut-quests";

export const Quests_Chronicles_of_a_New_Era_Bahamut = function(parent) {
    return new DataGroup("Bahamut", parent).initializeTasks(tasks);
};
