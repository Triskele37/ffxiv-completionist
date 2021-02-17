import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/character/disciples-of-magic";

export const Character_Achievements_Character_Disciple_of_Magic = function(parent) {
    const data = new DataGroup("Disciple of Magic", parent);
    data.name_de = "Magier";
    data.name_en = "Disciple of Magic";
    data.name_fr = "Disciples de la magie";
    data.name_ja = "ソーサラー";

    data.initializeTasks(tasks);

    return data;
};
