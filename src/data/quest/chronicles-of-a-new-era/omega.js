import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quests/chronicles-of-a-new-era/chronicles-of-a-new-era-omega/omega-quests";

export const Quests_Chronicles_of_a_New_Era_Omega = function(parent) {
    return new DataGroup("Omega", parent).initializeTasks(tasks);
};
