import { DataGroup } from "../../../DataGroup";

import { Collectables_Relic_Gear_Resistance_Relic } from "./relic";

export const Collectables_Relic_Gear_Resistance = function(parent) {
    return new DataGroup("Resistance", parent).initializeSubGroups([
        Collectables_Relic_Gear_Resistance_Relic,
    ]);
};
