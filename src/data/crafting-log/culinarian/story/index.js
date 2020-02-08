import { DataGroup } from "../../../DataGroup";

import { Crafting_Log_Culinarian_Story_Class_Quests } from "./class-quests";
import { Crafting_Log_Culinarian_Story_Crystarium_Deliveries } from "./crystarium-deliveries";

export const Crafting_Log_Culinarian_Story = function(parent) {
    return new DataGroup("Story", parent).initializeSubGroups([
        Crafting_Log_Culinarian_Story_Class_Quests,
        Crafting_Log_Culinarian_Story_Crystarium_Deliveries,
    ]);
};
