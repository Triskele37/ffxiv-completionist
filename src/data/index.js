/** in-game order
 1. character: [character (titles, class levels, rep), companion (barding), mounts, minions, blu, gold saucer (triad), achievements]
 2. duty: collection, journal, finder (dun, tri, raid), trust, hall of novice
 3. logs: hunting, sightseeing, crafting, gathering, fishing log, fishing guide, orchestrion
 4. travel: aether current, mount speed, shared fate
 5. social: emotes

 not in-game
 hunts, masked carnivale, aesthetician
 FATE? under shared fate?
 * */

 /* Duplicate name keys in groups:
 Rhyme & Region 2018 (label with JP/NA/EU)
 The Isle of Ken (break out spearfishing)
 Unspoiled Teeming Waters (?)
 */

import { Achievements } from "./achievement";
import { Collectable } from "./collectable";
import { Logs } from "./logs";
import { FATEs } from "./fate";
import { GatheringLogs } from "./gathering-log";
import { Duty } from "./duty";
import { Quests } from "./quest";

export const data = [
    Achievements,
    Collectable,
    require("./crafting-log"),
    Logs,
    FATEs,
    GatheringLogs,
    Duty,
    Quests
];
