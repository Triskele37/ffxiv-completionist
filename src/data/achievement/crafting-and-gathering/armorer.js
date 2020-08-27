import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/armorer";

export const Achievements_Crafting_and_Gathering_Armorer = function(parent) {
    const data = new DataGroup("Armorer", parent);
    data.name_de = "Plattner";
    data.name_en = "Armorer";
    data.name_fr = "Armurier";
    data.name_ja = "甲冑師";

    data.initializeTasks(tasks);

    return data;
};
