import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/battle/battle";

export const Achievements_Battle_Battle = function(parent) {
    const data = new DataGroup("Battle", parent);
    data.name_en = "Battle";
    data.name_fr = "Combats";

    data.initializeTasks(tasks);

    return data;
};
