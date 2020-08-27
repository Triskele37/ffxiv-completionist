import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/all-disciplines";

export const Achievements_Crafting_and_Gathering_All_Disciplines = function(parent) {
    const data = new DataGroup("All Disciplines", parent);
    data.name_de = "Klassenübergreifend";
    data.name_en = "All Disciplines";
    data.name_fr = "Toutes classes";
    data.name_ja = "全クラス共通";

    data.initializeTasks(tasks);

    return data;
};
