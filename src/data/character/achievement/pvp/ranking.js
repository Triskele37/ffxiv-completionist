import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/pvp/ranking";

export const Character_Achievements_PvP_Ranking = function(parent) {
    const data = new DataGroup("Ranking", parent);
    data.name_de = "PvP-Ranglisten";
    data.name_en = "Ranking";
    data.name_fr = "Classement";
    data.name_ja = "ランキング";

    data.initializeTasks(tasks);

    return data;
};
