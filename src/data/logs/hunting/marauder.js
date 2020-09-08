import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/hunting/marauder";

export const General_Logs_Hunting_Log_Marauder = function(parent) {
    const data = new DataGroup("Marauder", parent);
    data.name_fr = "Maraudeur";

    data.initializeTasks(tasks);

    return data;
};
