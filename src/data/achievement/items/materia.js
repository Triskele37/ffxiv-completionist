import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/materia";

export const Achievements_Items_Materia = function(parent) {
    const data = new DataGroup("Materia", parent);
    data.name_de = "Materia";
    data.name_en = "Materia";
    data.name_fr = "Matérias";
    data.name_ja = "マテリア";

    data.initializeTasks(tasks);

    return data;
};
