import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/items/deep-dungeon-weapons";

export const Character_Achievements_Items_Deep_Dungeon_Weapons = function(parent) {
    const data = new DataGroup("Deep Dungeon Weapons", parent);
    data.name_de = "Tiefe Gewölbe-Waffen";
    data.name_en = "Deep Dungeon Weapons";
    data.name_fr = "Armes Donjons sans fond";
    data.name_ja = "ディープダンジョン魔器";

    data.initializeTasks(tasks);

    return data;
};
