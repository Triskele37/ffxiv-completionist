import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Mor_Dhonan_Mor_Dhona } from "./mor-dhona";

export const Quests_Sidequests_Mor_Dhonan = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Sidequests_Mor_Dhonan_Mor_Dhona,
    ]);
};
