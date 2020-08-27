import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/character/disciples-of-the-land";

export const Achievements_Character_Disciple_of_the_Land = function(parent) {
    const data = new DataGroup("Disciple of the Land", parent);
    data.name_de = "Sammler";
    data.name_en = "Disciple of the Land";
    data.name_fr = "Disciples de la terre";
    data.name_ja = "ギャザラー";

    data.initializeTasks(tasks);

    return data;
};
