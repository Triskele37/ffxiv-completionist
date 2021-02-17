import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/hunting/maelstrom";

export const Logs_Hunting_Log_Maelstrom = function(parent) {
    const data = new DataGroup("Maelstrom", parent);
    data.name_fr = "Le Maelstrom";

    data.initializeTasks(tasks);

    return data;
};
