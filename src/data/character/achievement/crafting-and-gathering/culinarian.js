import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/crafting-gathering/culinarian";

export const Character_Achievements_Crafting_and_Gathering_Culinarian = function(parent) {
    const data = new DataGroup("Culinarian", parent);
    data.name_de = "Gourmet";
    data.name_en = "Culinarian";
    data.name_fr = "Cuisinier";
    data.name_ja = "調理師";

    data.initializeTasks(tasks);

    return data;
};
