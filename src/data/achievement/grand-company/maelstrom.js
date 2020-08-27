import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/grand-company/maelstrom";

export const Achievements_Grand_Company_Maelstrom = function(parent) {
    const data = new DataGroup("Maelstrom", parent);
    data.name_de = "Mahlstrom";
    data.name_en = "Maelstrom";
    data.name_fr = "Maelstrom";
    data.name_ja = "黒渦団";

    data.initializeTasks(tasks);

    return data;
};
