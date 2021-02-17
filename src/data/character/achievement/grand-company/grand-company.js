import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/grand-company/grand-company";

export const Character_Achievements_Grand_Company_Grand_Company = function(parent) {
    const data = new DataGroup("Grand Company", parent);
    data.name_de = "Staatliche Gesellschaften";
    data.name_en = "Grand Company";
    data.name_fr = "Général";
    data.name_ja = "全般";

    data.initializeTasks(tasks);

    return data;
};
