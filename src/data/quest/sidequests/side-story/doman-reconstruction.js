import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/side-story-quests/doman-reconstruction-quests";

export const Quests_Sidequests_Side_Story_Doman_Reconstruction = function(parent) {
    return new DataGroup("Doman Reconstruction", parent).initializeTasks(tasks);
};
