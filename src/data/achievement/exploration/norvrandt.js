import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/norvrandt";

export const Achievements_Exploration_Norvrandt = function(parent) {
    const data = new DataGroup("Norvrandt", parent);
    data.name_de = "Norvrandt";
    data.name_en = "Norvrandt";
    data.name_fr = "Norvrandt";
    data.name_ja = "ノルヴラント";

    data.initializeTasks(tasks);

    return data;
};
