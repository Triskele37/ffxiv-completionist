import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/side-story-quests/zodiac-weapons";

export const Quests_Sidequests_Side_Story_Zodiac_Weapons = function(parent) {
    return new DataGroup("Zodiac Weapons", parent).initializeTasks(tasks);
};
