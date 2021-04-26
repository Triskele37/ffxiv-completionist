import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Grand_Company_Order_of_the_Twin_Adder = function(parent) {
    const json = loadJson('./character/achievement/grand-company/order-of-the-twin-adder', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
