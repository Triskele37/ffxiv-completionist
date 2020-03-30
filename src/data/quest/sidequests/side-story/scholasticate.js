import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/side-story-quests/scholasticate-quests";

export const Quests_Sidequests_Side_Story_Scholasticate = function(parent) {
    return new DataGroup("Scholasticate", parent).initializeTasks(tasks);
};
