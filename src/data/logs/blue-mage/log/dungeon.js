import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/logs/blue-mage/log/dungeon";

export const General_Logs_Blue_Mage_Log_Dungeons = function(parent) {
    const data = new DataGroup("Dungeons", parent);
    data.name_fr = "Donjons";

    data.initializeTasks(tasks);

    return data;
};
