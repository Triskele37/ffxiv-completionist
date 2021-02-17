import { DataGroup } from "../../../DataGroup";
import { SimpleQuestColumnConfig } from "../columnConfigs";

import { Duty_Quests_Other_Grand_Company } from "./grand-company-quests";
import { Duty_Quests_Other_Seasonal } from "./seasonal-quests";
import { Duty_Quests_Other_Special } from "./special-quests";

export const Duty_Quests_Other = function(parent) {
    const data = new DataGroup("Other", parent);
    data.name_fr = "Autres Quêtes";

    data.columnConfig = SimpleQuestColumnConfig;

    data.initializeSubGroups([
        Duty_Quests_Other_Grand_Company,
        Duty_Quests_Other_Seasonal,
        Duty_Quests_Other_Special,
    ]);

    return data;
};
