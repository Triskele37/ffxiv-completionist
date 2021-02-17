import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/pvp/the-wolves-den";

export const Character_Achievements_PvP_The_Wolves_Den = function(parent) {
    const data = new DataGroup("The Wolves' Den", parent);
    data.name_de = "Wolfshöhle";
    data.name_en = "The Wolves' Den";
    data.name_fr = "L'Antre des loups";
    data.name_ja = "コロセウム";

    data.initializeTasks(tasks);

    return data;
};
