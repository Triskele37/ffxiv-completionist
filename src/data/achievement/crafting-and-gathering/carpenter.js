import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/carpenter";

export const Achievements_Crafting_and_Gathering_Carpenter = function(parent) {
    const data = new DataGroup("Carpenter", parent);
    data.name_de = "Zimmerer";
    data.name_en = "Carpenter";
    data.name_fr = "Menuisier";
    data.name_ja = "木工師";

    data.initializeTasks(tasks);

    return data;
};
