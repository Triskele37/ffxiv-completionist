import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/crafting-gathering/botanist";

export const Character_Achievements_Crafting_and_Gathering_Botanist = function(parent) {
    const data = new DataGroup("Botanist", parent);
    data.name_de = "Gärtner";
    data.name_en = "Botanist";
    data.name_fr = "Botaniste";
    data.name_ja = "園芸師";

    data.initializeTasks(tasks);

    return data;
};
