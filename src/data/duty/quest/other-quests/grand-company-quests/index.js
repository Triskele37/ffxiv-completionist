import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Other_Grand_Company_Maelstrom } from "./maelstrom-quests";
import { Duty_Quests_Other_Grand_Company_Order_of_the_Twin_Adder } from "./order-of-the-twin-adder-quests";
import { Duty_Quests_Other_Grand_Company_Immortal_Flames } from "./immortal-flames-quests";

export const Duty_Quests_Other_Grand_Company = function(parent) {
    const data = new DataGroup("Grand Company", parent);
    data.name_fr = "Grande Compagnie";

    data.initializeSubGroups([
        Duty_Quests_Other_Grand_Company_Maelstrom,
        Duty_Quests_Other_Grand_Company_Order_of_the_Twin_Adder,
        Duty_Quests_Other_Grand_Company_Immortal_Flames,
    ]);

    return data;
};
