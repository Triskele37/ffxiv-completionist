import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/exploration/mor-dhona";

export const Character_Achievements_Exploration_Mor_Dhona = function(parent) {
    const data = new DataGroup("Mor Dhona", parent);
    data.name_de = "Mor Dhona";
    data.name_en = "Mor Dhona";
    data.name_fr = "Mor Dhona";
    data.name_ja = "モードゥナ";

    data.initializeTasks(tasks);

    return data;
};
