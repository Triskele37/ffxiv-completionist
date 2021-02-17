import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/side-story-quests/ishgardian-restoration-sidequests";

export const Duty_Quests_Sidequests_Side_Story_Ishgardian_Restoration_Side = function(parent) {
    return new DataGroup("Ishgardian Restoration Sidequests", parent).initializeTasks(tasks);
};
