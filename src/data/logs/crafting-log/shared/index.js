import { DataGroup } from "../../../DataGroup";

import { Logs_Crafting_Log_Shared_Beast_Tribe_Quests } from "./beast-tribe-quests";
import { Logs_Crafting_Log_Shared_Custom_Deliveries } from "./custom-deliveries";

const basePath = "./logs/crafting/shared";
export const Logs_Crafting_Log_Shared = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        Logs_Crafting_Log_Shared_Beast_Tribe_Quests,
        Logs_Crafting_Log_Shared_Custom_Deliveries,
        DataGroup.fromJSON(parent, `${basePath}/dyes`),
    ];

    return group;
};
