import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/battle/raids";

export const Achievements_Battle_Raids = function(parent) {
    const data = new DataGroup("Raids", parent);
    data.name_de = "Raids";
    data.name_en = "Raids";
    data.name_fr = "Raids";
    data.name_ja = "レイド";

    data.initializeTasks(tasks);

    return data;
};
