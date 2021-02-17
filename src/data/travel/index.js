import { DataGroup } from "../DataGroup";

import { Travel_Aether_Currents } from "./aether-currents";
import { Travel_Aetherytes } from "./aetherytes";
import { Travel_Mount_Speed } from "./mount-speed";
import { Travel_Porters } from "./porters";
import { Travel_Shared_FATE } from "./shared-fate";

export const Travel = function(parent) {
    const data = new DataGroup("Travel", parent);
    data.name_en = "Travel";
    data.name_fr = "Voyage";

    data.initializeSubGroups([
        Travel_Aether_Currents,
        Travel_Aetherytes,
        Travel_Mount_Speed,
        Travel_Porters,
        Travel_Shared_FATE,
    ]);

    return data;
};
