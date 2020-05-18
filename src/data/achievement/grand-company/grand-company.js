import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/grand-company/grand-company";

export const Achievements_Grand_Company_Grand_Company = function(parent) {
    const data = new DataGroup("Grand Company", parent);
    data.name_en = "Grand Company";
    data.name_fr = "Grandes Compagnies";

    data.initializeTasks(tasks);

    return data;
};
