import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/exploration/coerthas";

export const Character_Achievements_Exploration_Coerthas = function(parent) {
    const data = new DataGroup("Coerthas", parent);
    data.name_de = "Coerthas";
    data.name_en = "Coerthas";
    data.name_fr = "Coerthas";
    data.name_ja = "クルザス";

    data.initializeTasks(tasks);

    return data;
};
