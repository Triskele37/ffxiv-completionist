import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

import { Character_Achievements_Legacy_Battle } from "./battle";
import { Character_Achievements_Legacy_Currency } from "./currency";
import { Character_Achievements_Legacy_Gathering } from "./gathering";
import { Character_Achievements_Legacy_Quests } from "./quests";
import { Character_Achievements_Legacy_Seasonal_Events } from "./seasonal-events";
import { Character_Achievements_Legacy_Dungeons } from "./dungeons";
import { Character_Achievements_Legacy_Exploration } from "./exploration";
import { Character_Achievements_Legacy_Grand_Company } from "./grand-company";

export const Character_Achievements_Legacy = function(parent) {
    const json = loadJson('./character/achievement/legacy/index', parent.lang);
    const data = new DataGroup(json.groupName, parent);
    data.defaultCompletion = "X";

    data.initializeSubGroups([
        Character_Achievements_Legacy_Battle,
        Character_Achievements_Legacy_Currency,
        Character_Achievements_Legacy_Gathering,
        Character_Achievements_Legacy_Quests,
        Character_Achievements_Legacy_Seasonal_Events,
        Character_Achievements_Legacy_Dungeons,
        Character_Achievements_Legacy_Exploration,
        Character_Achievements_Legacy_Grand_Company,
    ]);

    return data;
};
