import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/hunting/immortal-flames";

export const Logs_Hunting_Log_Immortal_Flames = function(parent) {
    const data = new DataGroup("Immortal Flames", parent);
    data.name_fr = "Les Immortels";

    data.initializeTasks(tasks);

    return data;
};
