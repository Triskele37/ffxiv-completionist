import { DataGroup } from "../../../DataGroup";

import { Character_Achievements_Quests_Quests } from "./quests";
import { Character_Achievements_Quests_Levequests } from "./levequests";
import { Character_Achievements_Quests_Beast_Tribe_Quests } from "./beast-tribe-quests";
import { Character_Achievements_Quests_Seasonal_Events } from "./seasonal";

export const Character_Achievements_Quests = function(parent) {
    const data = new DataGroup("Quests", parent);
    data.name_de = "Aufträge";
    data.name_en = "Quests";
    data.name_fr = "Quêtes";
    data.name_ja = "クエスト";

    data.initializeSubGroups([
        Character_Achievements_Quests_Quests,
        Character_Achievements_Quests_Levequests,
        Character_Achievements_Quests_Beast_Tribe_Quests,
        Character_Achievements_Quests_Seasonal_Events,
    ]);

    return data;
};
