import { eStore } from "../store/electronStore";
import { DataGroup } from "./DataGroup";

import { Character } from "./character";

import { Achievements } from "./achievement";
import { Collectables } from "./collectable";
import { General_Logs } from "./logs";
import { Crafting_Log } from "./crafting-log";
import { Gathering_Log } from "./gathering-log";
import { Duty } from "./duty";
import { FATEs } from "./fate";
import { Travel } from "./travel";
import { Quests } from "./quest";

const data = new DataGroup("Overall", null);
data.name_fr = "Global";

data.initializeSubGroups([
    // Character,

    Achievements,
    Collectables,
    General_Logs,
    Crafting_Log,
    Gathering_Log,
    Duty,
    FATEs,
    Travel,
    Quests,
]);

// Must be set after data initializes
data.lang = eStore.get('lang');

export { data };
