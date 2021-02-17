import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/crafting-gathering/alchemist";

export const Character_Achievements_Crafting_and_Gathering_Alchemist = function(parent) {
    const data = new DataGroup("Alchemist", parent);
    data.name_de = "Alchemist";
    data.name_en = "Alchemist";
    data.name_fr = "Alchimiste";
    data.name_ja = "錬金術師";

    data.initializeTasks(tasks);

    return data;
};
