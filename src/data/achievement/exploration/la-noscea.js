import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/la-noscea";

export const Achievements_Exploration_La_Noscea = function(parent) {
    const data = new DataGroup("La Noscea", parent);
    data.name_de = "La Noscea";
    data.name_en = "La Noscea";
    data.name_fr = "Noscea";
    data.name_ja = "ラノシア";

    data.initializeTasks(tasks);

    return data;
};
