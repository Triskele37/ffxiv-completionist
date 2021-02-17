import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/other-quests/grand-company-quests/order-of-the-twin-adder-quests";

export const Duty_Quests_Other_Grand_Company_Order_of_the_Twin_Adder = function(parent) {
    return new DataGroup("Order of the Twin Adder", parent).initializeTasks(tasks);
};
