import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/blue-mage/the-masked-carnivale";

export const General_Logs_Blue_Mage_The_Masked_Carnivale = function(parent) {
    const data = new DataGroup("The Masked Carnivale", parent);
    data.name_fr = "La Grande Mascarade";

    data.initializeTasks(tasks, [
        { header: "Level", key: "level", centered: true },
        { header: "Name", key: "name" },
        { header: "Standard Time", key: "standardTime" },
        { header: "Ideal Time", key: "idealTime" },
    ]);

    return data;
};
