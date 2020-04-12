import { DataGroup } from "../../../DataGroup";

import { Collectables_Relic_Gear_Skysteel_Dragonsung } from "./dragonsung";

export const Collectables_Relic_Gear_Skysteel = function(parent) {
    return new DataGroup("Skysteel", parent).initializeSubGroups([
        Collectables_Relic_Gear_Skysteel_Dragonsung,
    ]);
};
