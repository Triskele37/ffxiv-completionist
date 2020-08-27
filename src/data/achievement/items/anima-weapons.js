import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/anima-weapons";

export const Achievements_Items_Anima_Weapons = function(parent) {
    const data = new DataGroup("Anima Weapons", parent);
    data.name_de = "Anima-Waffen";
    data.name_en = "Anima Weapons";
    data.name_fr = "Armes anima";
    data.name_ja = "アニマウェポン";

    data.initializeTasks(tasks);

    return data;
};
