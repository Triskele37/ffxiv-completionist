import { DataGroup } from "./DataGroup";
import { applyStoreToData } from "./storageUtils";

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
data.initializeSubGroups([
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

// This line is what loads the user's data
applyStoreToData(data);

export { data };

/* Proposed Order
Character
    Barding
    Mount
    Minion
    Blue Magic Spellbook
    Gold Saucer
        Triple Triad Cards
        Triple Triad Opponents
    Achievements ...
Duty
    Collection
    Journal ... (quests)
    Duty Finder
        Dungeons
        Guildhests
        Trials
        Raids
    Trust
    Hall of the Novice
    Hunt
Logs
    Hunting Log ...
    Sightseeing Log ...
    Crafting Log ...
    Gathering Log ...
    Fishing Log
        Fishing
        Spearfishing
    Fishing Guide
        Fishing
        Spearfishing
    Orchestrion List ...
Travel
    Aether Currents
    Mount Speed
    Shared FATE
    FATE
    Porter
Social
    Emotes
    Aesthetician
*/
