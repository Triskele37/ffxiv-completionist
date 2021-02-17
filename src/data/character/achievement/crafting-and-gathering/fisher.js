import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/crafting-gathering/fisher";

export const Character_Achievements_Crafting_and_Gathering_Fisher = function(parent) {
    const data = new DataGroup("Fisher", parent);
    data.name_de = "Fischer";
    data.name_en = "Fisher";
    data.name_fr = "Pêcheur";
    data.name_ja = "漁師";

    data.initializeTasks(tasks);

    return data;
};
