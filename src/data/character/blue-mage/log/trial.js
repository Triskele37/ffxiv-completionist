import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/logs/blue-mage/log/trial";

export const Character_Blue_Mage_Log_Trials = function(parent) {
    const data = new DataGroup("Trials", parent);
    data.name_fr = "Défis";

    data.initializeTasks(tasks);

    return data;
};
