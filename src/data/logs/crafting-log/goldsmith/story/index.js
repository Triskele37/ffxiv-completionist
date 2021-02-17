import { DataGroup } from "../../../../DataGroup";

import { Logs_Crafting_Log_Goldsmith_Story_Class_Quests } from "./class-quests";
import { Logs_Crafting_Log_Goldsmith_Story_Crystarium_Deliveries } from "./crystarium-deliveries";

export const Logs_Crafting_Log_Goldsmith_Story = function(parent) {
    return new DataGroup("Story", parent).initializeSubGroups([
        Logs_Crafting_Log_Goldsmith_Story_Class_Quests,
        Logs_Crafting_Log_Goldsmith_Story_Crystarium_Deliveries,
    ]);
};
