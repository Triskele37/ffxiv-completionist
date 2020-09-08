import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/hunting/rogue";

export const General_Logs_Hunting_Log_Rogue = function(parent) {
    const data = new DataGroup("Rogue", parent);
    data.name_fr = "Surineur";

    data.initializeTasks(tasks);

    return data;
};
