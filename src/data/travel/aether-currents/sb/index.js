import { DataGroup } from "../../../DataGroup";

import { Travel_Aether_Currents_SB_The_Fringes } from "./the-fringes";
import { Travel_Aether_Currents_SB_The_Peaks } from "./the-peaks";
import { Travel_Aether_Currents_SB_The_Lochs } from "./the-lochs";
import { Travel_Aether_Currents_SB_The_Ruby_Sea } from "./the-ruby-sea";
import { Travel_Aether_Currents_SB_Yanxia } from "./yanxia";
import { Travel_Aether_Currents_SB_The_Azim_Steppe } from "./the-azim-steppe";

export const Travel_Aether_Currents_SB = function(parent) {
    return new DataGroup("SB", parent).initializeSubGroups([
        Travel_Aether_Currents_SB_The_Fringes,
        Travel_Aether_Currents_SB_The_Peaks,
        Travel_Aether_Currents_SB_The_Lochs,
        Travel_Aether_Currents_SB_The_Ruby_Sea,
        Travel_Aether_Currents_SB_Yanxia,
        Travel_Aether_Currents_SB_The_Azim_Steppe,
    ]);
};
