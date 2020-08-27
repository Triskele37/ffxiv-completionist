import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/character/disciples-of-war";

export const Achievements_Character_Disciple_of_War = function(parent) {
    const data = new DataGroup("Disciple of War", parent);
    data.name_de = "Krieger";
    data.name_en = "Disciple of War";
    data.name_fr = "Disciples de la guerre";
    data.name_ja = "ファイター";

    data.initializeTasks(tasks);

    return data;
};
