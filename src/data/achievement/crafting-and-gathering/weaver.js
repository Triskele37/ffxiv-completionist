import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/weaver";

export const Achievements_Crafting_and_Gathering_Weaver = function(parent) {
    const data = new DataGroup("Weaver", parent);
    data.name_de = "Weber";
    data.name_en = "Weaver";
    data.name_fr = "Couturier";
    data.name_ja = "裁縫師";

    data.initializeTasks(tasks);

    return data;
};
