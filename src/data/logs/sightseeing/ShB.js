import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/sightseeing/ShB";

export const Logs_Sightseeing_Log_ShB = function(parent) {
    const data =  new DataGroup("ShB", parent);
    data.name_fr = "ShB";

    data.initializeTasks(tasks);

    return data;
};
