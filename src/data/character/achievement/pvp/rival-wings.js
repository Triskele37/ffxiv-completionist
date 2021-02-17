import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/pvp/rival-wings";

export const Character_Achievements_PvP_Rival_Wings = function(parent) {
    const data = new DataGroup("Rival Wings", parent);
    data.name_de = "Stahlschwingen";
    data.name_en = "Rival Wings";
    data.name_fr = "Ailes rivales";
    data.name_ja = "ライバルウィングズ";

    data.initializeTasks(tasks);

    return data;
};
