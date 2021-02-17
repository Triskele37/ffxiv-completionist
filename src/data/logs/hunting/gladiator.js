import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/hunting/gladiator";

export const Logs_Hunting_Log_Gladiator = function(parent) {
    const data = new DataGroup("Gladiator", parent);
    data.name_fr = "Gladiateur";

    data.initializeTasks(tasks);

    return data;
};
