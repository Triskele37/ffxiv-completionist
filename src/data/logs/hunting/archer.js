import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/hunting/archer";

export const Logs_Hunting_Log_Archer = function(parent) {
    const data = new DataGroup("Archer", parent);
    data.name_fr = "Archer";

    data.initializeTasks(tasks);

    return data;
};
