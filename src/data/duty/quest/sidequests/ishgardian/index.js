import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Ishgardian_Ishgard } from "./ishgard";

export const Duty_Quests_Sidequests_Ishgardian = function(parent) {
    const data = new DataGroup("Ishgardian", parent);
    data.name_fr = "Ishgard";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Ishgardian_Ishgard,
    ]);

    return data;
};
