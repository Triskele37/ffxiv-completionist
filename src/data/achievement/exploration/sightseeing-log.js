import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/sightseeing-log";

export const Achievements_Exploration_Sightseeing_Log = function(parent) {
    const data = new DataGroup("Sightseeing Log", parent);
    data.name_de = "Eorzea Incognita";
    data.name_en = "Sightseeing Log";
    data.name_fr = "Carnet d'exploration";
    data.name_ja = "探検手帳";

    data.initializeTasks(tasks);

    return data;
};
