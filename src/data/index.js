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
import { CraftingLogs } from "./crafting-log";
import { Logs } from "./logs";
import { FATEs } from "./fate";
import { Gathering_Logs } from "./gathering-log";
import { Duty } from "./duty";
import { Quests } from "./quest";

const storageKey = "completion";

export const data = {
    name: "Overall",
    storageKey,
    groupKeys: [
        "Achievements",
        "Collectable",
        "CraftingLogs",
        "Logs",
        "FATEs",
        "Gathering_Logs",
        "Duty",
        "Quests"
    ],
    // Groups
    Achievements: Achievements(storageKey),
    Collectable: Collectable(storageKey),
    CraftingLogs: CraftingLogs(storageKey),
    Logs: Logs(storageKey),
    FATEs: FATEs(storageKey),
    Gathering_Logs: Gathering_Logs(storageKey),
    Duty: Duty(storageKey),
    Quests: Quests(storageKey),
};
