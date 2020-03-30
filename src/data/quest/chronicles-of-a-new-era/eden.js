import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/quests/chronicles-of-a-new-era/chronicles-of-a-new-era-eden/eden";

export const Quests_Chronicles_of_a_New_Era_Eden = function(parent) {
    return new DataGroup("Eden", parent).initializeTasks(tasks);
};
