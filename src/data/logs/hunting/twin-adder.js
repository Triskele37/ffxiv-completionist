import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/logs/hunting/twin-adder";

export const General_Logs_Hunting_Log_Order_of_the_Twin_Adder = function(parent) {
    const data = new DataGroup("Order of the Twin Adder", parent);
    data.name_fr = "L'ordre des Deux Vipères";

    data.initializeTasks(tasks);

    return data;
};
