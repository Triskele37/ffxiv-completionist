import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/side-story-quests/void-quests";

export const Duty_Quests_Sidequests_Side_Story_Void_Quests = function(parent) {
    return new DataGroup("Void Quests", parent).initializeTasks(tasks);
};
