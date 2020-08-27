import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/collectables";

export const Achievements_Items_Collectables = function(parent) {
    const data = new DataGroup("Collectables", parent);
    data.name_de = "Sammlerstücke";
    data.name_en = "Collectables";
    data.name_fr = "Objets collectionnables";
    data.name_ja = "収集品";

    data.initializeTasks(tasks);

    return data;
};
