import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/relic-weapons";

export const Achievements_Items_Relic_Weapons = function(parent) {
    const data = new DataGroup("Relic Weapons", parent);
    data.name_de = "Zenit-Waffen";
    data.name_en = "Relic Weapons";
    data.name_fr = "Armes antiques";
    data.name_ja = "古の武器";

    data.initializeTasks(tasks);

    return data;
};
