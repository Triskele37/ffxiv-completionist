import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/pvp/general";

export const Character_Achievements_PvP_General = function(parent) {
    const data = new DataGroup("General", parent);
    data.name_de = "Allgemein";
    data.name_en = "General";
    data.name_fr = "Général";
    data.name_ja = "全般";

    data.initializeTasks(tasks);

    return data;
};
