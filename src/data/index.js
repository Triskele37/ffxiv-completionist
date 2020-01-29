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
 The Isle of Ken (break out spearfishing)
 Unspoiled Teeming Waters (?)
*/

import { DataGroup } from "./DataGroup";

import { Achievements } from "./achievement";
import { Collectable } from "./collectable";
import { CraftingLogs } from "./crafting-log";
import { Logs } from "./logs";
import { FATEs } from "./fate";
import { Gathering_Logs } from "./gathering-log";
import { Duty } from "./duty";
import { Quests } from "./quest";

const data = new DataGroup("Overall", null);
data.initializeSubGroups([
    Achievements,
    // Collectable,
    // CraftingLogs,
    // Logs,
    // FATEs,
    // Gathering_Logs,
    // Duty,
    // Quests,
]);

export { data };

console.log(data);