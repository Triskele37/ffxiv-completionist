import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/pvp/frontline";

export const Achievements_PvP_Frontline = function(parent) {
    const data = new DataGroup("Frontline", parent);
    data.name_de = "Front";
    data.name_en = "Frontline";
    data.name_fr = "Front";
    data.name_ja = "フロントライン";

    data.initializeTasks(tasks);

    return data;
};
