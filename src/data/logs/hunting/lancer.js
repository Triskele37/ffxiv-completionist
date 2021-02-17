import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/hunting/lancer";

export const Logs_Hunting_Log_Lancer = function(parent) {
    const data = new DataGroup("Lancer", parent);
    data.name_fr = "Maître d'hast";

    data.initializeTasks(tasks);

    return data;
};
