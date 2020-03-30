import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/side-story-quests/hildibrand-quests";

export const Quests_Sidequests_Side_Story_Hildibrand = function(parent) {
    return new DataGroup("Hildibrand", parent).initializeTasks(tasks);
};
