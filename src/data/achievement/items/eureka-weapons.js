import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/eureka-weapons";

export const Achievements_Items_Eureka_Weapons = function(parent) {
    const data = new DataGroup("Eureka Weapons", parent);
    data.name_de = "Eureka-Ausrüstung";
    data.name_en = "Eureka Weapons";
    data.name_fr = "Armes Eurêka";
    data.name_ja = "エウレカウェポン";

    data.initializeTasks(tasks);

    return data;
};
