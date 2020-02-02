import { DataGroup } from "../../../DataGroup";

import { Crafting_Log_Leatherworker_Story_Class_Quests } from "./class-quests";
import { Crafting_Log_Leatherworker_Story_Crystarium_Deliveries } from "./crystarium-deliveries";

export const Crafting_Log_Leatherworker_Story = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Log_Leatherworker_Story_Class_Quests,
        Crafting_Log_Leatherworker_Story_Crystarium_Deliveries,
    ]);
};
