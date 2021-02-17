import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/sightseeing/HW";

export const Logs_Sightseeing_Log_HW = function(parent) {
    const data = new DataGroup("HW", parent);
    data.name_fr = "HS";

    data.initializeTasks(tasks);

    return data;
};
