import { DataGroup } from "../../../DataGroup";

import { Quests_Other_Grand_Company_Maelstrom } from "./maelstrom-quests";
import { Quests_Other_Grand_Company_Order_of_the_Twin_Adder } from "./order-of-the-twin-adder-quests";
import { Quests_Other_Grand_Company_Immortal_Flames } from "./immortal-flames-quests";

export const Quests_Other_Grand_Company = function(parent) {
    return new DataGroup("Grand Company", parent).initializeSubGroups([
        Quests_Other_Grand_Company_Maelstrom,
        Quests_Other_Grand_Company_Order_of_the_Twin_Adder,
        Quests_Other_Grand_Company_Immortal_Flames,
    ]);
};
