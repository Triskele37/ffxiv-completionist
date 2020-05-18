import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/grand-company/order-of-the-twin-adder";

export const Achievements_Grand_Company_Order_of_the_Twin_Adder = function(parent) {
    return new DataGroup("Order of the Twin Adder", parent).initializeTasks(tasks);
};
