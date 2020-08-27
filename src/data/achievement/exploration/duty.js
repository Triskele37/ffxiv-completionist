import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/duty";

export const Achievements_Exploration_Duty = function(parent) {
    const data = new DataGroup("Duty", parent);
    data.name_de = "Inhalte";
    data.name_en = "Duty";
    data.name_fr = "Instances";
    data.name_ja = "コンテンツ";

    data.initializeTasks(tasks);

    return data;
};
