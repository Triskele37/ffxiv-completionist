import { DataGroup } from "../../../DataGroup";

import { Travel_Aether_Currents_HW_Coerthas_Western_Highlands } from "./coerthas-western-highlands";
import { Travel_Aether_Currents_HW_The_Dravanian_Forelands } from "./the-dravanian-forelands";
import { Travel_Aether_Currents_HW_The_Dravanian_Hinterlands } from "./the-dravanian-hinterlands";
import { Travel_Aether_Currents_HW_The_Churning_Mists } from "./the-churning-mists";
import { Travel_Aether_Currents_HW_The_Sea_of_Clouds } from "./the-sea-of-clouds";
import { Travel_Aether_Currents_HW_Azys_Lla } from "./azys-lla";

export const Travel_Aether_Currents_HW = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Travel_Aether_Currents_HW_Coerthas_Western_Highlands,
        Travel_Aether_Currents_HW_The_Dravanian_Forelands,
        Travel_Aether_Currents_HW_The_Dravanian_Hinterlands,
        Travel_Aether_Currents_HW_The_Churning_Mists,
        Travel_Aether_Currents_HW_The_Sea_of_Clouds,
        Travel_Aether_Currents_HW_Azys_Lla,
    ]);
};
