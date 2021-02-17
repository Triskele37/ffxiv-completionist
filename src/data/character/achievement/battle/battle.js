import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/battle/battle";

export const Character_Achievements_Battle_Battle = function(parent) {
    const data = new DataGroup("Battle", parent);
    data.name_de = "Kampferfolge";
    data.name_en = "Battle";
    data.name_fr = "Général";
    data.name_ja = "全般";

    data.initializeTasks(tasks);

    return data;
};
