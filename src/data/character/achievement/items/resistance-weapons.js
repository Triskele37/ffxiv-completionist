import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/items/resistance-weapons";

export const Character_Achievements_Items_Resistance_Weapons = function(parent) {
    const data = new DataGroup("Resistance Weapons", parent);
    data.name_de = "Waffen des Widerstands";
    data.name_en = "Resistance Weapons";
    data.name_fr = "Armes de la résistance";
    data.name_ja = "レジスタンス・ウェポン";

    data.initializeTasks(tasks);

    return data;
};
