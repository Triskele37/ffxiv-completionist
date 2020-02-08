import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Ishgardian_Ishgard } from "./ishgard";

export const Quests_Sidequests_Ishgardian = function(parent) {
    return new DataGroup("Ishgardian", parent).initializeSubGroups([
        Quests_Sidequests_Ishgardian_Ishgard,
    ]);
};
