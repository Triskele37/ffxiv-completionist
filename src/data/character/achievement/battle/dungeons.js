import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/battle/dungeons";

export const Character_Achievements_Battle_Dungeons = function(parent) {
    const data = new DataGroup("Dungeons", parent);
    data.name_de = "Dungeons";
    data.name_en = "Dungeons";
    data.name_fr = "Dunjons";
    data.name_ja = "ダンジョン";

    data.initializeTasks(tasks);

    return data;
};
