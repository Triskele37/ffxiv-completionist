import { DataGroup } from "../DataGroup";

import { Travel_Aether_Currents } from "./aether-currents";
import { Travel_Aetherytes } from "./aetherytes";
import { Travel_Mount_Speed } from "./mount-speed";
import { Travel_Porters } from "./porters";

export const Travel = function(parent) {
    const group = DataGroup.fromJSON(parent, "./travel/index");

    group.subGroups = [
        Travel_Aether_Currents(group),
        Travel_Aetherytes(group),
        Travel_Mount_Speed(group),
        Travel_Porters(group),
        DataGroup.fromJSON(parent, "./travel/shared-fate"),
    ];

    return group;
};
