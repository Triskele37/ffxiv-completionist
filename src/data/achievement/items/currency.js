import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/currency";

export const Achievements_Items_Currency = function(parent) {
    const data = new DataGroup("Currency", parent);
    data.name_de = "Vermögen";
    data.name_en = "Currency";
    data.name_fr = "Devises";
    data.name_ja = "通貨";

    data.initializeTasks(tasks);

    return data;
};
