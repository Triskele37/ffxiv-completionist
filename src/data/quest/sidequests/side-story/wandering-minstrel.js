import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/side-story-quests/wandering-minstrel-quests";

export const Quests_Sidequests_Side_Story_Wandering_Minstrel = function(parent) {
    return new DataGroup("Wandering Minstrel", parent).initializeTasks(tasks);
};
