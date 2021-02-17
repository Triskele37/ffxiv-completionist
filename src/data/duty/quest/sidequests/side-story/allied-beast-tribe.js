import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/side-story-quests/allied-beast-tribe-quests";

export const Duty_Quests_Sidequests_Side_Story_Allied_Beast_Tribe = function(parent) {
    return new DataGroup("Allied Beast Tribe", parent).initializeTasks(tasks);
};
