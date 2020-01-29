/*
    Duplicate name keys in groups:
        The Isle of Ken (break out spearfishing)
        Unspoiled Teeming Waters (?)
*/

/* Data Fixes
Achievements - 99 extra items (250 in quests.quests, 172 in sheet)
Collectable - Reverify verbiage against IG UI (no item count issues)
General_Logs - no issues
Crafting - TODO
Gathering - TODO
Duty - Reverify verbiage against IG UI (no item count issues)
FATEs - TODO
Quests - TODO
*/

import { DataGroup } from "./DataGroup";

import { Achievements } from "./achievement";
import { Collectables } from "./collectable";
import { General_Logs } from "./logs";
// import { CraftingLogs } from "./crafting-log";
// import { Gathering_Logs } from "./gathering-log";
import { Duty } from "./duty";
// import { FATEs } from "./fate";
// import { Quests } from "./quest";

const data = new DataGroup("Overall", null);
data.initializeSubGroups([
    Achievements,
    Collectables,
    General_Logs,
    // CraftingLogs,
    // Gathering_Logs,
    Duty,
    // FATEs,
    // Quests,
]);

export { data };

console.log(data);

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
