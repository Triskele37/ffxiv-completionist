import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/side-story-quests/zodiac-weapons";

export const Duty_Quests_Sidequests_Side_Story_Zodiac_Weapons = function(parent) {
    return new DataGroup("Zodiac Weapons", parent).initializeTasks(tasks);
};
