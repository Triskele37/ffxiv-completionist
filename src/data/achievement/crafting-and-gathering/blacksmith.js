import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/blacksmith";

export const Achievements_Crafting_and_Gathering_Blacksmith = function(parent) {
    const data = new DataGroup("Blacksmith", parent);
    data.name_de = "Grobschmied";
    data.name_en = "Blacksmith";
    data.name_fr = "Forgeron";
    data.name_ja = "鍛冶師";

    data.initializeTasks(tasks);

    return data;
};
