import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/side-story-quests/doman-reconstruction-quests";

export const Duty_Quests_Sidequests_Side_Story_Doman_Reconstruction = function(parent) {
    return new DataGroup("Doman Reconstruction", parent).initializeTasks(tasks);
};
