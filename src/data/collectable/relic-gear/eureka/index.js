import { DataGroup } from "../../../DataGroup";

import { Collectables_Relic_Gear_Eureka_Antiquated } from "./antiquated";
import { Collectables_Relic_Gear_Eureka_Anemos } from "./anemos";
import { Collectables_Relic_Gear_Eureka_Pagos } from "./pagos";
import { Collectables_Relic_Gear_Eureka_Pyros } from "./pyros";
import { Collectables_Relic_Gear_Eureka_Hydatos } from "./hydatos";

export const Collectables_Relic_Gear_Eureka = function(parent) {
    return new DataGroup("Eureka", parent).initializeSubGroups([
        Collectables_Relic_Gear_Eureka_Antiquated,
        Collectables_Relic_Gear_Eureka_Anemos,
        Collectables_Relic_Gear_Eureka_Pagos,
        Collectables_Relic_Gear_Eureka_Pyros,
        Collectables_Relic_Gear_Eureka_Hydatos,
    ]);
};
