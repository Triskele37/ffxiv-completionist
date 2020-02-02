import { DataGroup } from "../../../DataGroup";

import { Crafting_Log_Shared_Beast_Tribe_Quests_Ixal } from "./ixal-quests";
import { Crafting_Log_Shared_Beast_Tribe_Quests_Moogle } from "./moogle-quests";
import { Crafting_Log_Shared_Beast_Tribe_Quests_Namazu } from "./namazu-quests";

export const Crafting_Log_Shared_Beast_Tribe_Quests = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Log_Shared_Beast_Tribe_Quests_Ixal,
        Crafting_Log_Shared_Beast_Tribe_Quests_Moogle,
        Crafting_Log_Shared_Beast_Tribe_Quests_Namazu,
    ]);
};
