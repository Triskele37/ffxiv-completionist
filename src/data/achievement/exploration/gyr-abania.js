import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/gyr-abania";

export const Achievements_Exploration_Gyr_Abania = function(parent) {
    const data = new DataGroup("Gyr Abania", parent);
    data.name_de = "Gyr Abania";
    data.name_en = "Gyr Abania";
    data.name_fr = "Gyr Abania";
    data.name_ja = "ギラバニア";

    data.initializeTasks(tasks);

    return data;
};
