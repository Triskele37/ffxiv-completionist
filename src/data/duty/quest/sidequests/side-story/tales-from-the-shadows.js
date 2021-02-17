import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/side-story-quests/tales-from-the-shadows";

export const Duty_Quests_Sidequests_Side_Story_Tales_from_the_Shadows = function(parent) {
    return new DataGroup("Tales from the Shadows", parent).initializeTasks(tasks);
};
