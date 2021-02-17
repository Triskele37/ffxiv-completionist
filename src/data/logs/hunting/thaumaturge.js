import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/hunting/thaumaturge";

export const Logs_Hunting_Log_Thaumaturge = function(parent) {
    const data = new DataGroup("Thaumaturge", parent);
    data.name_fr = "Occultiste";

    data.initializeTasks(tasks);

    return data;
};
