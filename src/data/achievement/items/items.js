import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/items";

export const Achievements_Items_Items = function(parent) {
    const data = new DataGroup("Items", parent);
    data.name_de = "Gegenstände";
    data.name_en = "Items";
    data.name_fr = "Général";
    data.name_ja = "全般";

    data.initializeTasks(tasks);

    return data;
};
