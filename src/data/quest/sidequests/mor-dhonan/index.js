import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Mor_Dhonan_Mor_Dhona } from "./mor-dhona";

export const Quests_Sidequests_Mor_Dhonan = function(parent) {
    return new DataGroup("Mor Dhonan", parent).initializeSubGroups([
        Quests_Sidequests_Mor_Dhonan_Mor_Dhona,
    ]);
};
