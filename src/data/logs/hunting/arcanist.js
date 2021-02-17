import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/hunting/arcanist";

export const Logs_Hunting_Log_Arcanist = function(parent) {
    const data = new DataGroup("Arcanist", parent);
    data.name_fr = "Arcaniste";

    data.initializeTasks(tasks);

    return data;
};
