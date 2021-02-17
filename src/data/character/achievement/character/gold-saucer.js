import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/character/gold-saucer";

export const Character_Achievements_Character_Gold_Saucer = function(parent) {
    const data = new DataGroup("Gold Saucer", parent);
    data.name_de = "Gold Saucer";
    data.name_en = "Gold Saucer";
    data.name_fr = "Gold Saucer";
    data.name_ja = "ゴールドソーサー";

    data.initializeTasks(tasks);

    return data;
};
