import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/exploration/thanalan";

export const Achievements_Exploration_Thanalan = function(parent) {
    const data = new DataGroup("Thanalan", parent);
    data.name_de = "Thanalan";
    data.name_en = "Thanalan";
    data.name_fr = "Thanalan";
    data.name_ja = "ザナラーン";

    data.initializeTasks(tasks);

    return data;
};
