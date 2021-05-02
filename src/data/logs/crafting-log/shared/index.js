import { DataGroup } from "../../../DataGroup";

import { Logs_Crafting_Log_Shared_Beast_Tribe_Quests } from "./beast-tribe-quests";
import { Logs_Crafting_Log_Shared_Custom_Deliveries } from "./custom-deliveries";

const basePath = "./logs/crafting/shared";
export const Logs_Crafting_Log_Shared = function(parent) {
    const group = DataGroup.fromJSON(parent, `${basePath}/index`);

    group.subGroups = [
        Logs_Crafting_Log_Shared_Beast_Tribe_Quests(group),
        Logs_Crafting_Log_Shared_Custom_Deliveries(group),
        DataGroup.fromJSON(group, `${basePath}/dyes`),
    ];

    group.isCraftingLogGroup = true;
    return group;
};
