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

/* Groups that are entered but excluded:
    Achievements > Legacy
    Quests > Other > Special/Seasonal
*/

/* Missing Sections
    Duty > Collection
    Duty > Trust
    Duty > GC
*/

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
