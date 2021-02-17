import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/side-story-quests/anima-weapons";

export const Duty_Quests_Sidequests_Side_Story_Anima_Weapons = function(parent) {
    return new DataGroup("Anima Weapons", parent).initializeTasks(tasks);
};
