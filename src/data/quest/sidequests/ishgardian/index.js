import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Ishgardian_Ishgard } from "./ishgard";

export const Quests_Sidequests_Ishgardian = function(parent) {
    const data = new DataGroup("Ishgardian", parent);
    data.name_fr = "Ishgard";

    data.initializeSubGroups([
        Quests_Sidequests_Ishgardian_Ishgard,
    ]);

    return data;
};
