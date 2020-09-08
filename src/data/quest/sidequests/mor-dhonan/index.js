import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Mor_Dhonan_Mor_Dhona } from "./mor-dhona";

export const Quests_Sidequests_Mor_Dhonan = function(parent) {
    const data = new DataGroup("Mor Dhonan", parent);
    data.name_fr = "Mor Dhona";

    data.initializeSubGroups([
        Quests_Sidequests_Mor_Dhonan_Mor_Dhona,
    ]);

    return data;
};
