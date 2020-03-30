import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quests/chronicles-of-a-new-era/chronicles-of-a-new-era-the-warring-triad/heavensward-primal-quests";

export const Quests_Chronicles_of_a_New_Era_The_Warring_Triad = function(parent) {
    return new DataGroup("The Warring Triad", parent).initializeTasks(tasks);
};
