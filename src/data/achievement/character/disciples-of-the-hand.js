import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/character/disciples-of-the-hand";

export const Achievements_Character_Disciple_of_the_Hand = function(parent) {
    const data = new DataGroup("Disciple of the Hand", parent);
    data.name_de = "Handwerker";
    data.name_en = "Disciple of the Hand";
    data.name_fr = "Disciples de la main";
    data.name_ja = "クラフター";

    data.initializeTasks(tasks);

    return data;
};
