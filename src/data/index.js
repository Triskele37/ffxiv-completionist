/*
    Duplicate name keys in groups if all displayed: shard/crystals
*/

/* Data Fixes
Achievements - 99 extra items (250 in quests.quests, 172 in sheet)
Crafting -
    BSM - 551/876
    GSM - 742/1243
    ALC - 707/697, 10 extra
Gathering -
    Mining - 201/183
    Harvesting - 275/268
    Logging - 160/153
    (9 extra FSH guide, 8 extra FSH log)
Quests - Reverify counts and verbiage against IG UI
*/

import { DataGroup } from "./DataGroup";

import { Achievements } from "./achievement";
import { Collectables } from "./collectable";
import { General_Logs } from "./logs";
import { Crafting_Log } from "./crafting-log";
import { Gathering_Log } from "./gathering-log";
import { Duty } from "./duty";
import { FATEs } from "./fate";
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
    Quests,
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
