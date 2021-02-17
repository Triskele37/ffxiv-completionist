import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/exploration/dravania";

export const Character_Achievements_Exploration_Dravania = function(parent) {
    const data = new DataGroup("Dravania", parent);
    data.name_de = "Dravania";
    data.name_en = "Dravania";
    data.name_fr = "Dravania";
    data.name_ja = "ドラヴァニア";

    data.initializeTasks(tasks);

    return data;
};
