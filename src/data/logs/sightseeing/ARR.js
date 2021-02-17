import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/sightseeing/ARR";

export const Logs_Sightseeing_Log_ARR = function(parent) {
    const data = new DataGroup("ARR", parent);
    data.name_fr = "ARR";

    data.initializeTasks(tasks);

    return data;
};
