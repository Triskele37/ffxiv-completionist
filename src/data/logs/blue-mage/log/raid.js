import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/logs/blue-mage/log/raid";

export const General_Logs_Blue_Mage_Log_Raids = function(parent) {
    const data = new DataGroup("Raids", parent);
    data.name_fr = "Raids";

    data.initializeTasks(tasks);

    return data;
};
