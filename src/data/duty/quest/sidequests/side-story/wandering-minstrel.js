import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/side-story-quests/wandering-minstrel-quests";

export const Duty_Quests_Sidequests_Side_Story_Wandering_Minstrel = function(parent) {
    return new DataGroup("Wandering Minstrel", parent).initializeTasks(tasks);
};
