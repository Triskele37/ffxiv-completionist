import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/goldsmith";

export const Achievements_Crafting_and_Gathering_Goldsmith = function(parent) {
    const data = new DataGroup("Goldsmith", parent);
    data.name_de = "Goldschmied";
    data.name_en = "Goldsmith";
    data.name_fr = "Orfèvre";
    data.name_ja = "彫金師";

    data.initializeTasks(tasks);

    return data;
};
