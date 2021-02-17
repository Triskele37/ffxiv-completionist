import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/crafting-gathering/miner";

export const Character_Achievements_Crafting_and_Gathering_Miner = function(parent) {
    const data = new DataGroup("Miner", parent);
    data.name_de = "Minenarbeiter";
    data.name_en = "Miner";
    data.name_fr = "Mineur";
    data.name_ja = "採掘師";

    data.initializeTasks(tasks);

    return data;
};
