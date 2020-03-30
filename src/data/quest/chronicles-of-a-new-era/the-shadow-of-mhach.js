import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quests/chronicles-of-a-new-era/chronicles-of-a-new-era-the-shadow-of-mhach/shadow-of-mhach-quests";

export const Quests_Chronicles_of_a_New_Era_The_Shadow_of_Mhach = function(parent) {
    return new DataGroup("The Shadow of Mhach", parent).initializeTasks(tasks);
};
