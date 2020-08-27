import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/crafting-gathering/leatherworker";

export const Achievements_Crafting_and_Gathering_Leatherworker = function(parent) {
    const data = new DataGroup("Leatherworker", parent);
    data.name_de = "Gerber";
    data.name_en = "Leatherworker";
    data.name_fr = "Tanneur";
    data.name_ja = "革細工師";

    data.initializeTasks(tasks);

    return data;
};
