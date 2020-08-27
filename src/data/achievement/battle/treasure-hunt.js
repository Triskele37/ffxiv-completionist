import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/battle/treasure-hunt";

export const Achievements_Battle_Treasure_Hunt = function(parent) {
    const data = new DataGroup("Treasure Hunt", parent);
    data.name_de = "Schatzsuche";
    data.name_en = "Treasure Hunt";
    data.name_fr = "Treasure Hunt";
    data.name_ja = "トレジャーハント";

    data.initializeTasks(tasks);

    return data;
};
