import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/exploration/abalathias-spine";

export const Character_Achievements_Exploration_Abalathias_Spine = function(parent) {
    const data = new DataGroup("Abalathia's Spine", parent);
    data.name_de = "Abalathia";
    data.name_en = "Abalathia's Spine";
    data.name_fr = "Abalathia";
    data.name_ja = "アバラシア";

    data.initializeTasks(tasks);

    return data;
};
