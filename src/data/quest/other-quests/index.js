import { DataGroup } from "../../DataGroup";

import { Quests_Other_Grand_Company } from "./grand-company-quests";
import { Quests_Other_Seasonal } from "./seasonal-quests";
import { Quests_Other_Special } from "./special-quests";

export const Quests_Other = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Other_Grand_Company,
        Quests_Other_Seasonal,
        Quests_Other_Special,
    ]);
};
