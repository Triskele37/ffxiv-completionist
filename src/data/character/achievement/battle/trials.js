import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/battle/trials";

export const Character_Achievements_Battle_Trials = function(parent) {
    const data = new DataGroup("Trials", parent);
    data.name_de = "Prüfungen";
    data.name_en = "Trials";
    data.name_fr = "Défis";
    data.name_ja = "討伐・討滅戦";

    data.initializeTasks(tasks);

    return data;
};
