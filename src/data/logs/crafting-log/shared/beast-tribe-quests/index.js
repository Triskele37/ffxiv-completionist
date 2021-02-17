import { DataGroup } from "../../../../DataGroup";

import { Logs_Crafting_Log_Shared_Beast_Tribe_Quests_Ixal } from "./ixal-quests";
import { Logs_Crafting_Log_Shared_Beast_Tribe_Quests_Moogle } from "./moogle-quests";
import { Logs_Crafting_Log_Shared_Beast_Tribe_Quests_Namazu } from "./namazu-quests";
import { Logs_Crafting_Log_Shared_Beast_Tribe_Quests_Dwarf } from "./dwarf-quests";

export const Logs_Crafting_Log_Shared_Beast_Tribe_Quests = function(parent) {
    return new DataGroup("Beast Tribe Quests", parent).initializeSubGroups([
        Logs_Crafting_Log_Shared_Beast_Tribe_Quests_Ixal,
        Logs_Crafting_Log_Shared_Beast_Tribe_Quests_Moogle,
        Logs_Crafting_Log_Shared_Beast_Tribe_Quests_Namazu,
        Logs_Crafting_Log_Shared_Beast_Tribe_Quests_Dwarf,
    ]);
};
