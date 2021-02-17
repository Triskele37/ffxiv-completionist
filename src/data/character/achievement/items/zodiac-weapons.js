import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/items/zodiac-weapons";

export const Character_Achievements_Items_Zodiac_Weapons = function(parent) {
    const data = new DataGroup("Zodiac Weapons", parent);
    data.name_de = "Zeta-Waffen";
    data.name_en = "Zodiac Weapons";
    data.name_fr = "Armes du zodiaque";
    data.name_ja = "ゾディアックウェポン";

    data.initializeTasks(tasks);

    return data;
};
