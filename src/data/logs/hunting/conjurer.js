import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/hunting/conjurer";

export const General_Logs_Hunting_Log_Conjurer = function(parent) {
    const data = new DataGroup("Conjurer", parent);
    data.name_fr = "Élémentaliste";

    data.initializeTasks(tasks);

    return data;
};
