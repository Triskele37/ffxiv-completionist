import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/character/general";

export const Character_Achievements_Character_General = function(parent) {
    const data = new DataGroup("General", parent);
    data.name_de = "Charakter";
    data.name_en = "General";
    data.name_fr = "Général";
    data.name_ja = "全般";

    data.initializeTasks(tasks);

    return data;
};
