import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/hunting/pugilist";

export const General_Logs_Hunting_Log_Pugilist = function(parent) {
    const data = new DataGroup("Pugilist", parent);
    data.name_fr = "Pugiliste";

    data.initializeTasks(tasks);

    return data;
};
