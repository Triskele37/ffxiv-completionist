import { DataGroup } from "../DataGroup";

import { Travel_Aether_Currents } from "./aether-currents";
import { Travel_Mount_Speed } from "./mount-speed";
import { Travel_Shared_FATE } from "./shared-fate";
import { Travel_Porter } from "./porter";

export const Travel = function(parent) {
    return new DataGroup("Travel", parent).initializeSubGroups([
        Travel_Aether_Currents,
        Travel_Mount_Speed,
        Travel_Shared_FATE,
        Travel_Porter,
    ]);
};
