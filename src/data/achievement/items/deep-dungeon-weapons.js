import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/deep-dungeon-weapons";

export const Achievements_Items_Deep_Dungeon_Weapons = function(parent) {
    return new DataGroup("Deep Dungeon Weapons", parent).initializeTasks(tasks);
};
