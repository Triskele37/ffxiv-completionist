import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/grand-company/order-of-the-twin-adder";

export const Character_Achievements_Grand_Company_Order_of_the_Twin_Adder = function(parent) {
    const data = new DataGroup("Order of the Twin Adder", parent);
    data.name_de = "Bruderschaft";
    data.name_en = "Order of the Twin Adder";
    data.name_fr = "Ordre des Deux Vipères";
    data.name_ja = "双蛇党";

    data.initializeTasks(tasks);

    return data;
};
