import { DataGroup } from "../../DataGroup";
import { SimpleQuestColumnConfig } from "../columnConfigs";

import { Quests_Other_Grand_Company } from "./grand-company-quests";
import { Quests_Other_Seasonal } from "./seasonal-quests";
import { Quests_Other_Special } from "./special-quests";

export const Quests_Other = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.columnConfig = SimpleQuestColumnConfig;

    data.initializeSubGroups([
        Quests_Other_Grand_Company,
        Quests_Other_Seasonal,
        Quests_Other_Special,
    ]);

    return data;
};
