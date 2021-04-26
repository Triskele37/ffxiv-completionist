import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

import { Character_Achievements_Quests_Quests } from "./quests";
import { Character_Achievements_Quests_Levequests } from "./levequests";
import { Character_Achievements_Quests_Beast_Tribe_Quests } from "./beast-tribe-quests";
import { Character_Achievements_Quests_Seasonal_Events } from "./seasonal";

export const Character_Achievements_Quests = function(parent) {
    const json = loadJson('./character/achievement/quests/index', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeSubGroups([
        Character_Achievements_Quests_Quests,
        Character_Achievements_Quests_Levequests,
        Character_Achievements_Quests_Beast_Tribe_Quests,
        Character_Achievements_Quests_Seasonal_Events,
    ]);

    return data;
};
