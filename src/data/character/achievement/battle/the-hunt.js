import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/battle/the-hunt";

export const Character_Achievements_Battle_The_Hunt = function(parent) {
    const data = new DataGroup("The Hunt", parent);
    data.name_de = "Hohe Jagd";
    data.name_en = "The Hunt";
    data.name_fr = "Contrats de chasse";
    data.name_ja = "モブハント";

    data.initializeTasks(tasks);

    return data;
};
