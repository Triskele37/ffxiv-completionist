import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/exploration/othard";

export const Character_Achievements_Exploration_Othard = function(parent) {
    const data = new DataGroup("Othard", parent);
    data.name_de = "Othard";
    data.name_en = "Othard";
    data.name_fr = "Othard";
    data.name_ja = "オサード";

    data.initializeTasks(tasks);

    return data;
};
