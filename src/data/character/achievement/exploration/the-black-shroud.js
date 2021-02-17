import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/exploration/the-black-shroud";

export const Character_Achievements_Exploration_The_Black_Shroud = function(parent) {
    const data = new DataGroup("The Black Shroud", parent);
    data.name_de = "Finsterwald";
    data.name_en = "The Black Shroud";
    data.name_fr = "Forêt de Sombrelinceul";
    data.name_ja = "黒衣森";

    data.initializeTasks(tasks);

    return data;
};
