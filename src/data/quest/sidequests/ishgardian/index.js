import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Ishgardian_Ishgard } from "./ishgard";

export const Quests_Sidequests_Ishgardian = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Sidequests_Ishgardian_Ishgard,
    ]);
};
