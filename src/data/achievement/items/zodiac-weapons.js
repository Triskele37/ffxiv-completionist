import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/items/zodiac-weapons";

export const Achievements_Items_Zodiac_Weapons = function(parent) {
    return new DataGroup("Zodiac Weapons", parent).initializeTasks(tasks);
};
