import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/items/desynthesis";

export const Character_Achievements_Items_Desynthesis = function(parent) {
    const data = new DataGroup("Desynthesis", parent);
    data.name_de = "Verwertung";
    data.name_en = "Desynthesis";
    data.name_fr = "Recyclage";
    data.name_ja = "分解";

    data.initializeTasks(tasks);

    return data;
};
