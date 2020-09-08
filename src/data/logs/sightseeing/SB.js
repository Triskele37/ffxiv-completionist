import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/sightseeing/SB";

export const General_Logs_Sightseeing_Log_SB = function(parent) {
    const data = new DataGroup("SB", parent);
    data.name_fr = "SB";

    data.initializeTasks(tasks);

    return data;
};
