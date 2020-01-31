import { DataGroup } from "../../../DataGroup";

import { Crafting_Logs_Goldsmith_Story_Class_Quests } from "./class-quests";
import { Crafting_Logs_Goldsmith_Story_Crystarium_Deliveries } from "./crystarium-deliveries";

export const Crafting_Logs_Goldsmith_Story = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Crafting_Logs_Goldsmith_Story_Class_Quests,
        Crafting_Logs_Goldsmith_Story_Crystarium_Deliveries,
    ]);
};
