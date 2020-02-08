import { DataGroup } from "../../../DataGroup";

import { Collectables_Relic_Gear_Anima_Animated } from "./animated";
import { Collectables_Relic_Gear_Anima_Awoken } from "./awoken";
import { Collectables_Relic_Gear_Anima_Anima } from "./anima";
import { Collectables_Relic_Gear_Anima_Hyperconductive } from "./hyperconductive";
import { Collectables_Relic_Gear_Anima_Reconditioned } from "./reconditioned";
import { Collectables_Relic_Gear_Anima_Sharpened } from "./sharpened";
import { Collectables_Relic_Gear_Anima_Complete } from "./complete";
import { Collectables_Relic_Gear_Anima_Lux } from "./lux";

export const Collectables_Relic_Gear_Anima = function(parent) {
    return new DataGroup("Anima", parent).initializeSubGroups([
        Collectables_Relic_Gear_Anima_Animated,
        Collectables_Relic_Gear_Anima_Awoken,
        Collectables_Relic_Gear_Anima_Anima,
        Collectables_Relic_Gear_Anima_Hyperconductive,
        Collectables_Relic_Gear_Anima_Reconditioned,
        Collectables_Relic_Gear_Anima_Sharpened,
        Collectables_Relic_Gear_Anima_Complete,
        Collectables_Relic_Gear_Anima_Lux,
    ]);
};
