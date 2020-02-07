import { DataGroup } from "../../DataGroup";

import { Achievements_Legacy_Battle } from "./battle";
import { Achievements_Legacy_Currency } from "./currency";
import { Achievements_Legacy_Gathering } from "./gathering";
import { Achievements_Legacy_Quests } from "./quests";
import { Achievements_Legacy_Seasonal_Events } from "./seasonal-events";
import { Achievements_Legacy_Dungeons } from "./dungeons";
import { Achievements_Legacy_Exploration } from "./exploration";
import { Achievements_Legacy_Grand_Company } from "./grand-company";

export const Achievements_Legacy = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.defaultCompletion = "X";

    data.initializeSubGroups([
        Achievements_Legacy_Battle,
        Achievements_Legacy_Currency,
        Achievements_Legacy_Gathering,
        Achievements_Legacy_Quests,
        Achievements_Legacy_Seasonal_Events,
        Achievements_Legacy_Dungeons,
        Achievements_Legacy_Exploration,
        Achievements_Legacy_Grand_Company,
    ]);

    return data;
};
