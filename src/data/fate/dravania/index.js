import { DataGroup } from "../../DataGroup";

import { FATEs_Dravania_The_Churning_Mists } from "./the-churning-mists";
import { FATEs_Dravania_The_Dravanian_Forelands } from "./the-dravanian-forelands";
import { FATEs_Dravania_The_Dravanian_Hinterlands } from "./the-dravanian-hinterlands";

export const FATEs_Dravania = function(parent) {
    return new DataGroup("Dravania", parent).initializeSubGroups([
        FATEs_Dravania_The_Churning_Mists,
        FATEs_Dravania_The_Dravanian_Forelands,
        FATEs_Dravania_The_Dravanian_Hinterlands,
	]);
};
