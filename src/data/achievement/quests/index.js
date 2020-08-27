import { DataGroup } from "../../DataGroup";

import { Achievements_Quests_Quests } from "./quests";
import { Achievements_Quests_Levequests } from "./levequests";
import { Achievements_Quests_Beast_Tribe_Quests } from "./beast-tribe-quests";
import { Achievements_Quests_Seasonal_Events } from "./seasonal";

export const Achievements_Quests = function(parent) {
    const data = new DataGroup("Quests", parent);
    data.name_de = "Aufträge";
    data.name_en = "Quests";
    data.name_fr = "Quêtes";
    data.name_ja = "クエスト";

    data.initializeSubGroups([
        Achievements_Quests_Quests,
        Achievements_Quests_Levequests,
        Achievements_Quests_Beast_Tribe_Quests,
        Achievements_Quests_Seasonal_Events,
    ]);

    return data;
};
